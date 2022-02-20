<template>
    <div>
        <slot/>
    </div>
</template>

<script>
export default {
    name: "RootLayout"
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
</style>
