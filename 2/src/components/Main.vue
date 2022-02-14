<template>
    <div>
        <h2>Поиск видео</h2>
        <form action="">
            <div>
                <input type="text" class = "search-video" placeholder="Что хотите посмотреть?">
                <button class = "button button-search">Найти</button>
            </div>
        </form>
        <div><h2>Дальше не сделано</h2></div>
       <div id="player"></div>
    </div>

</template>

<script>
let key = "AIzaSyBu-6ggGZXH7juRDouZ0wAjPOtge84f3wk";
    export default {
        data(){
            return{
                done: false
            }
        },
        methods:{
            onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
                });
            },
            onPlayerReady(event) {
                event.target.playVideo();
            },
            onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 6000);
                done = true;
            }
            }
        }
    }
</script>

<style scoped >
    .search-video{
        padding:14px 54px 14px 15px;
        color:dark;
        font-size:20px;
    }
    .button{
        background-color:#1390E5;
        color:white;
        border: none;
        border-radius:0 3px 3px 0;
        font-size: 20px;
        padding: 16px 20px;
    }
</style>