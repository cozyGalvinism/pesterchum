import Vue from 'vue'
import Vuex from 'vuex'

import { isUppercase } from './utils'

Vue.use(Vuex)

export const SET_USERNAME = 'SET_USERNAME'
export const SET_THEME = 'SET_THEME'
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'
export const SET_APP_COLOR = 'SET_APP_COLOR'

const initialState = {
    username: getSavedState('settings.username') || 'ectoBiologist',
    theme: getSavedState('settings.theme') || 'default',
    appColor: getSavedState('settings.appColor') || '#ffff00'
}
const getters = {
    getUsername: state => state.username,
    getShortedName: function(state) {
        var name = ""
        name = state.username
        if(name == null || name.length == 0) return ""
        var firstCharacter = name.charAt(0)
        var indexSecondChar = -1
        for(var i = 1; i < name.length; i++) {
            var char = name[i]
            if(isUppercase(char)) {
                indexSecondChar = i
                break
            }
        }
        if(indexSecondChar == -1) return firstCharacter.toUpperCase()
        else return (firstCharacter + name[indexSecondChar]).toUpperCase()
    },
    getTheme: state => state.theme,
    isDarkMode: state => state.theme.endsWith("-dark"),
    getAppColor: state => state.appColor
}
const mutations = {
    [SET_USERNAME](state, username) {
        state.username = username
        saveState('settings.username', username)
    },
    [SET_THEME](state, theme) {
        state.theme = theme
        saveState('settings.theme', theme)
        Vue.material.theming.theme = theme
    },
    [TOGGLE_DARK_MODE](state) {
        state.theme = state.theme + "-dark"
        saveState('settings.theme', state.theme)
        Vue.material.theming.theme = state.theme
    },
    [SET_APP_COLOR](state, color) {
        state.appColor = color
        saveState('settings.appColor', color)
        document.documentElement.style.setProperty('--md-theme-default-primary', color)
        document.documentElement.style.setProperty('--md-theme-default-primary-on-background', color)
        document.documentElement.style.setProperty('--md-theme-default-dark-primary', color)
        document.documentElement.style.setProperty('--md-theme-default-dark-primary-on-background', color)
    }
}

export default new Vuex.Store({
    state: initialState,
    getters,
    mutations
})

// Persistence

function getSavedState(key) {
    return JSON.parse(window.localStorage.getItem(key))
}
  
function saveState(key, state) {
    window.localStorage.setItem(key, JSON.stringify(state))
}