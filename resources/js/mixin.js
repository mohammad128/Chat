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
        },

        playAudio( src ) {
            this.stopAudio();
            this.$store.commit('setMusicPlayer', src);
        },
        stopAudio() {
            this.$store.state.musicPlayer.play = false;
            if(this.$store.state.musicPlayer.audio) {
                this.$store.state.musicPlayer.audio.pause();
            }
            this.$store.commit('deleteMusicPlayer')
        },
        fancyTimeFormat(duration)
        {
            // Hours, minutes and seconds
            let hrs = ~~(duration / 3600);
            let mins = ~~((duration % 3600) / 60);
            let secs = ~~duration % 60;
            let ret = "";
            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }
            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }
    }
}
export default globalMixin;
