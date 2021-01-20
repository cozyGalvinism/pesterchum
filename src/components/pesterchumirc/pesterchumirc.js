const PesterchumIRC = {
    ircClient: null,
    install(Vue, options) {
        if(!Vue.irc) {

            Vue.irc = this
            Vue.prototype.$irc = Vue.irc
        }
    },
    connect(options) {
        
    },
    rawOnMessage(event) {
        console.log(event.message)
    }
}
export default PesterchumIRC