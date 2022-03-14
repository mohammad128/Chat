<template>

    <ContextMenu class="flex flex-col p-2 flex flex-row" :data="contextMenuData" v-model="showContextMenu">
        <div v-for="(item, index) in links" :key="index"
            class="w-full max-w-full hover:bg-gray-100 rounded-lg p-4 cursor-pointer"
            @contextmenu="contextMenuData=item;showContextMenu=false;showContextMenu=true"
            @click="showContextMenu=false"
        >
            <div class="flex flex-row gap-4">
                <div class="avatar">
<!--                    <Avatar :src="`https://ui-avatars.com/api/?name=${ getHost(item.link) }&color=FFF&background=3390ec`" border-radius="12"/>-->
                    <Avatar :src="getSiteFavIcon(item.link)" border-radius="12"/>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex flex-row justify-between">
<!--                        <pre class="text-sm font-bold text-gray-900">{{ getHost(item.link) }}</pre>-->
                        <span class="text-xs text-gray-500">{{item.time}}</span>
                    </div>
                    <code class="text-sm text-gray-500 break-all line-clamp-3 hover:line-clamp-none">
                        {{ item.message }}
                    </code>
                    <div class="flex flex-col break-words">
                        <a target="_blank" class="w-full text-sm text-sky-600 break-all line-clamp-1 hover:line-clamp-none" :href="item.link">{{item.link}}</a>
                        <span class="w-full text-gray-500 text-sm">{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <template #menuContent>
            <div class="w-48">
                <Menu :data="contextMenuItems" container-class="py-2"/>
            </div>
        </template>

    </ContextMenu>
</template>

<script>
import ContextMenu from "@/Pages/Component/ContextMenu";
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";
import Avatar from "@/Pages/Component/Avatar";
export default {
    name: "Links",
    components: {Avatar, Menu, ContextMenu},
    data() {
        return {
            links: [
                {
                    id: 1,
                    name: 'name'+1,
                    message: `💻 فروش لپ تاپ های استوک با قیمت دانشجویی 🔥👇
                     https://ranginblind.com/
                    `,
                    link: 'https://ranginblind.com/',
                    time: '03:54 PM'
                },
                {
                    id: 2,
                    name: 'name'+2,
                    message: `💻 فروش لپ تاپ های استوک با قیمت دانشجویی 🔥👇
                     https://www.digikala.com/product/dkp-3246506/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-redmi-9a-m2006c3lg-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-32-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA/
                    `,
                    link: 'https://www.digikala.com/product/dkp-3246506/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-redmi-9a-m2006c3lg-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-32-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA/',
                    time: '03:54 PM'
                },
                {
                    id: 3,
                    name: 'name'+3,
                    message: `💻 فروش لپ تاپ های استوک با قیمت دانشجویی 🔥👇
                     https://link1.com
                    `,
                    link: 'https://www.link3.com',
                    time: '03:54 PM'
                },
                {
                    id: 4,
                    name: 'name'+4,
                    message: `#5G #Other_IT_Software #IT_Software #Tutorials

                    Get it here for Free! Enjoy 👍❤️
                    https://devcourseweb.com/?p=37445`,
                    link: 'https://devcourseweb.com/?p=37445',
                    time: '03:54 PM'
                },
                {
                    id: 5,
                    name: 'name'+5,
                    message: `💻 فروش لپ تاپ های استوک با قیمت دانشجویی 🔥👇
                     https://link1.com
                    `,
                    link: 'https://www.link5.com',
                    time: '03:54 PM'
                },
            ],

            contextMenuData: null,
            showContextMenu: false,
            contextMenuItems: [
                {
                    'type': 'button',
                    'id': 1,
                    'icon': 'share-outline',
                    'text': 'Forward',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Saved Messages')
                    }
                },
                {
                    'type': 'button',
                    'id': 2,
                    'icon': 'message-outline',
                    'text': 'Show Message',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Contact')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'check-circle-outline',
                    'text': 'Select',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Settings')
                    }
                },
            ],
        }
    },
    methods: {
        getHost(link) {
            try {
                let host = new URL(link).host;
                return host.startsWith("www.") ? host.substr(4) : host;
            }
            catch (e) {
                return  'laraGram.com';
            }
        },
        getSiteFavIcon(link) {
            return `https://api.faviconkit.com/${this.getHost(link)}/48`;
        }
    },
    mounted() {
        this.getSiteFavIcon('google.com');
        // for (let index=1; index<31; index++) {
        //     this.links.push(
        //         {
        //             id: index,
        //             name: 'name'+index,
        //             message: `💻 فروش لپ تاپ های استوک با قیمت دانشجویی 🔥👇
        //              https://link${index}.com
        //             `,
        //             link: 'https://www.link${index}.com',
        //             time: '03:54 PM'
        //         }
        //     )
        // }
    }
}
</script>

<style scoped>

</style>
