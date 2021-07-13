<template>
    <main>

        <section class="container video">
            <h1 class="title">Vídeos</h1>

            <div class="videos">
                <a class="video" :href="video.link" v-for="(video, key) in videos" :key="key" target="_blank">
                    <img :src="video.thumb" :alt="video.title">
                    <h2 class="video-title">{{ video.title }}</h2>
                </a>
            </div>
        </section>

    </main>
</template>

<script>
import api from '@/services/api.js';
import './style.css';

export default {
    name: 'Videos',
    data() {
        return {
            videos: []
        }
    },
    mounted() {
        api.get('/videos.json').then(response => {
            console.log(response.data)
            this.videos = response.data
        })
    }
}
</script>