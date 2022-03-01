const globalMixin = {
    methods: {
        makeToast(msg) {
            let oldToasts = document.getElementsByClassName('toast');
            for (let i=0; i<oldToasts.length; i++) {
                oldToasts[i].remove();
            }
            var elem = document.createElement('div');
            elem.innerHTML = msg;
            elem.classList.add('toast');
            document.body.appendChild(elem);
            setTimeout( () => {
                elem.remove();
            }, 3000);
        },
        copyToClipboard( text ) {
            var elem = document.createElement('textarea');
            elem.innerHTML = text;
            document.body.appendChild(elem);
            elem.select();
            document.execCommand('copy');
            elem.remove();
        }
    }
}
export default globalMixin;
