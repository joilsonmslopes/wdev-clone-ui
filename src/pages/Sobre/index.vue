<template>
    <main>

        <section class="container about">
            <h1 class="title">Sobre</h1>

            <div class="about">
                <p v-html="about"></p>
            </div>
        </section>

    </main>
</template>

<script>
import api from '@/services/api.js';
import './style.css';

export default {
    name: 'Sobre',
    data() {
        return {
            about: ''
        }
    },
    mounted() {
        api.get('/about.json').then(response => {
            this.about = response.data.about
        })
    }
}
</script>