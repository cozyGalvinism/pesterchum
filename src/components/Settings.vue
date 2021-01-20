<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Theme Settings</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label>Theme</label>
          <md-select v-model="theme">
            <md-option value="default">Default</md-option>
            <md-option value="default-dark">Default Dark</md-option>     
          </md-select>
        </md-field>
        <label for="colorChoice">Primary color:</label>
        <v-input-colorpicker v-model="appColor" />
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-header>
        <div class="md-title">Server Settings</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label>Server</label>
          <md-select v-model="server">
            <md-option value="pesterchum.xyz">pesterchum.xyz (turntechCatnip's server)</md-option>
            <md-option value="havoc.ddns.net">havoc.ddns.net (@chaoticCharacte's server)</md-option>
          </md-select>
        </md-field>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { SET_THEME, SET_APP_COLOR } from '../store'

export default {
  data: () => ({
    server: 'pesterchum.xyz'
  }),
  computed: {
    theme: {
      get() {
        return this.$store.state.theme
      },
      set(value) {
        this.$store.commit(SET_THEME, value)
      }
    },
    appColor: {
      get() {
        return this.$store.state.appColor
      },
      set(value) {
        this.$store.commit(SET_APP_COLOR, value)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 425px) {
  .md-card {
    width: 100%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
}

@media (min-width: 426px) {
  .md-card {
    width: 350px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
}
</style>