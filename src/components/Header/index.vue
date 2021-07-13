<template>
    <header>
        <nav class="container">
            <router-link to="/"><img id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="Logo wdev"></router-link>

            <img id="img-button" @click="openMenu" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir menu">

            <div id="menu-overlay" @click="closeMenu" v-if="menuActive"></div>

            <div id="menu-items" :class="{active: menuActive}">

                <a href="#"><img id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="Logo wdev"></a>

                <ul>
                    <li @click="closeMenu"><router-link to="/">Home</router-link></li>
                    <li @click="closeMenu"><router-link to="/videos">Vídeo</router-link></li>
                    <li @click="closeMenu"><router-link to="/sobre">Sobre</router-link></li>
                    <li @click="closeMenu"><router-link to="/contato">Contato</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import './style.css';

export default {
    name: 'Header',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu() {
            this.menuActive = true
        },
        closeMenu() {
            this.menuActive = false
        }
    }
}
</script>