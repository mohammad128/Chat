<template>
    <div class="p-4 flex flex-col  gap-4">
        <FileItem v-for="(item, index) in files" :key="index" :data="item"/>
    </div>
</template>

<script>
import FileItem from "@/Pages/Partials/Search/Files/FileItem";
export default {
    name: "Files",
    components: {FileItem},
    data() {
        return {
            files: [
                {
                    user: {
                        id: 1,
                        username: "name1"
                    },
                    filename: 'file1.zip',
                    time: '04:15 PM',
                    size: '8 KB',
                    src: '/uploads/files/file.zip',
                    type: 'zip'
                },
                {
                    user: {
                        id: 2,
                        username: "name2"
                    },
                    filename: 'file2.zip',
                    time: '04:15 PM',
                    size: '2 MB',
                    src: '/uploads/files/file.zip',
                    type: 'zip'
                },
                {
                    user: {
                        id: 2,
                        username: "name2"
                    },
                    filename: 'file2.zip',
                    time: '04:15 PM',
                    size: '1.05 GB',
                    src: '/uploads/files/file.zip',
                    type: 'zip'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
