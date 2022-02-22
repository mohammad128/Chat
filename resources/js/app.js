require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import RootLayout from "@/Layouts/RootLayout";
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';
import VWave from 'v-wave';
import Popper from "vue3-popper";
import 'vue-transitions-css';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        let page = require(`./Pages/${name}.vue`).default;
        page.layout = RootLayout;
        return page;
    },
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(mdiVue, {
                icons: mdijs
            })
            .use(VWave)
            .directive('click-outside', {
                beforeMount(el, binding, vnode) {
                    el.clickOutsideEvent = function(event) {
                        if (!(el === event.target || el.contains(event.target))) {
                            binding.value(event, el);
                        }
                    };
                    document.body.addEventListener('click', el.clickOutsideEvent);
                    // document.body.addEventListener('contextmenu', el.clickOutsideEvent);
                },
                unmounted(el) {
                    document.body.removeEventListener('click', el.clickOutsideEvent);
                }
            })
            .component("Popper", Popper)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
