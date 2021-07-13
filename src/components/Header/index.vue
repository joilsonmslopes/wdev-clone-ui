<template>
    <header>
        <nav class="container">
            <a href="#"><img id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="Logo wdev"></a>

            <img id="img-button" @click="openMenu" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir menu">

            <div id="menu-overlay" @click="closeMenu" v-if="menuActive"></div>

            <div id="menu-items" :class="{active: menuActive}">

                <a href="#"><img id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="Logo wdev"></a>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/videos">Vídeo</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
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