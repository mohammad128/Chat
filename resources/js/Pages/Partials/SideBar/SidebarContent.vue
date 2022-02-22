<template>
    <div class="h-full">
        <ChatList :data="chatList"/>
    </div>
</template>

<script>
import ChatList from "@/Pages/Partials/ChatList/ChatList";

export default {
    components: {
        ChatList
    },
    props: {
    },
    data() {
        return {
            chatList: [
                {
                    'name': 'mohammad',
                    'profile_photo_url': '/uploads/avatars/1.jpeg',
                    'last_message': {
                        message: 'This is last messageThis is last messageThis is last messageThis is last message',
                        time: '06:43',
                    },
                    'unread_message_count': 300,
                },
                {
                    'name': 'Mahyar',
                    'profile_photo_url': '/uploads/avatars/3.png',
                    'last_message': {
                        message: 'This is last message',
                        time: '16:43',
                    },
                    'unread_message_count': 14,
                },
                {
                    'name': 'Alireza',
                    'profile_photo_url': '/uploads/avatars/2.png',
                    'last_message': {
                        message: 'This is last message',
                        time: '16:43',
                    },
                    'unread_message_count': 22,
                },
                {
                    'name': 'mohammad',
                    'profile_photo_url': '/uploads/avatars/1.jpeg',
                    'last_message': {
                        message: 'This is last message',
                        time: '06:43',
                    },
                    'unread_message_count': 300,
                },
                {
                    'name': 'Mahyar',
                    'profile_photo_url': '/uploads/avatars/3.png',
                    'last_message': {
                        message: 'This is last message',
                        time: '16:43',
                    },
                    'unread_message_count': 14,
                },
                {
                    'name': 'Alireza',
                    'profile_photo_url': '/uploads/avatars/2.png',
                    'last_message': {
                        message: 'This is last message',
                        time: '16:43',
                    },
                    'unread_message_count': 22,
                },
                {
                    'name': 'mohammad',
                    'profile_photo_url': '/uploads/avatars/1.jpeg',
                    'last_message': {
                        message: 'This is last message',
                        time: '06:43',
                    },
                    'unread_message_count': 300,
                },
                {
                    'name': 'Mahyar',
                    'profile_photo_url': '/uploads/avatars/3.png',
                    'last_message': {
                        message: 'This is last message',
                        time: '16:43',
                    },
                    'unread_message_count': 14,
                },
                {
                    'name': 'Alireza',
                    'profile_photo_url': '/uploads/avatars/2.png',
                    'last_message': {
                        message: 'This is last message',
                        time: '16:43',
                    },
                    'unread_message_count': 22,
                },
                {
                    'name': 'mohammad',
                    'profile_photo_url': '/uploads/avatars/1.jpeg',
                    'last_message': {
                        message: 'This is last message',
                        time: '06:43',
                    },
                    'unread_message_count': 300,
                },
                {
                    'name': 'Mahyar',
                    'profile_photo_url': '/uploads/avatars/3.png',
                    'last_message': {
                        message: 'This is last message',
                        time: '16:43',
                    },
                    'unread_message_count': 14,
                },
                {
                    'name': 'Alireza',
                    'profile_photo_url': '/uploads/avatars/2.png',
                    'last_message': {
                        message: 'This is last message',
                        time: '16:43',
                    },
                    'unread_message_count': 22,
                },
            ]
        }
    },
}


</script>

<style scoped>

</style>
