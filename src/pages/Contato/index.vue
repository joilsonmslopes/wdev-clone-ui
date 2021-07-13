<template>
    <main>

        <section class="container contact">
            <h1 class="title">Contato</h1>

            <div class="contacts">
                <div class="contact" v-for="(contact, key) in contacts" :key="key">
                    <h2 class="contact-title">{{ contact.title }}</h2>
                    <a class="link" :href="contact.link" target="_blank">{{ contact.label }}</a>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
import api from '@/services/api.js';
import './style.css';

export default {
    name: 'Contato',
    data() {
        return {
            contacts: []
        }
    },
    mounted() {
        api.get('/contacts.json').then(response => {
            console.log(response.data)
            this.contacts = response.data
        })
    }
}
</script>