require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import RootLayout from "@/Layouts/RootLayout";
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import VWave from 'v-wave'

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
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
