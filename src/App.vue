<template>
  <md-app class="full-height">
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Pesterchum</span>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible" :md-swipeable="true">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
      <md-list>
        <md-list-item v-for="(link, index) in links" :key="index" :to="link.to" @click="toggleMenu" exact>
          <md-icon>{{ link.icon }}</md-icon>
          <span class="md-list-item-text">{{ link.name }}</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-tabs md-sync-route>
      <md-tab v-for="(link, index) in links" :key="index" :md-label="link.name" :to="link.to" />
    </md-tabs>
    <md-app-content>
      <main>
        <router-view />
      </main>
    </md-app-content>
  </md-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
      ...mapGetters(['getTheme', 'getAppColor'])
    },
    data: () => ({
        links: [
            {
                name: 'Home',
                to: '/',
                icon: 'home'
            },
            {
              name: 'Settings',
              to: '/settings',
              icon: 'settings'
            }
        ],
        menuVisible: false
    }),
    methods: {
      toggleMenu(e) {
        this.menuVisible = !this.menuVisible
      }
    },
    mounted() {
      this.$material.theming.theme = this.getTheme
      document.documentElement.style.setProperty('--md-theme-' + this.getTheme + '-primary', this.getAppColor)
      this.$irc.connect({
        host: 'irc.freenode.net',
        port: 6667,
        nick: 'PesterchumBud'
      })
    }
}
</script>

<style lang="scss" scoped>
.full-height {
  height: 100vh;
}
</style>