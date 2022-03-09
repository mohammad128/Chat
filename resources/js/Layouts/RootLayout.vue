<template>
    <div class="w-screen">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "RootLayout",
    mounted() {
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }
}
</script>

<style >
button, input, optgroup, select, textarea, html {
    font-family: "Roboto",-apple-system,apple color emoji,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
}

button, input, optgroup, select, textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
/* width */
::-webkit-scrollbar {
    width: 5px;
    height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 100vh;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #a0aec0;
}
*{
    user-select: none;
}
</style>
