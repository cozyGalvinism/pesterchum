<template>
  <div>
    <md-content>
      Welcome to Pesterchum! Now in web flavour!
    </md-content>
    <md-field>
      <label>Username</label>
      <md-input v-model="username" />
    </md-field>
    <p>Your username is {{ getShortedName }}</p>
  </div>
</template>

<style scoped>

</style>

<script>
import { SET_USERNAME } from '../store'
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  computed: {
    username: {
      get() {
        return this.$store.state.username
      },
      set(value) {
        this.$store.commit(SET_USERNAME, value)
      }
    },
    ...mapGetters(['getShortedName'])
  },
}
</script>