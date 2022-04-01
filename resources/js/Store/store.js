import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            musicPlayer: {
                src: '',
                play: false,
                audio: null
            }
        }
    },
    mutations: {
        setMusicPlayer( state, src ) {
            state.musicPlayer.src = src;
            state.musicPlayer.audio = new Audio(
                src
            );
        },
        deleteMusicPlayer(state) {
            state.musicPlayer.src = '';
            state.musicPlayer.audio = null;
        }
    }
})

export default store;
