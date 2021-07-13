<template>
    <footer>
        <a :href="socialLink.link" class="socialLink" v-for="(socialLink, key) in socialLinks" :key="key" target="_blank">
            <img :src="socialLink.icon" :title="socialLink.label" :alt="socialLink.label">
        </a>
    </footer>
</template>

<script>
import api from '@/services/api.js';

import './style.css';
export default {
    name: 'Footer',
    data() {
        return {
            socialLinks: []
        }
    },
    mounted() {
        // fazendo requisição na api via axios
        api.get('/social-links.json').then(response => {
            this.socialLinks = response.data;
        });
    }
}
</script>