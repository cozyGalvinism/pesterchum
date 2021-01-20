import IRC from 'irc-framework'

const PesterchumIRC = {
    ircClient: null,
    install(Vue, options) {
        if(!Vue.irc) {
            this.ircClient = new IRC.Client()
            this.ircClient.on('message', this.rawOnMessage)

            Vue.irc = this
            Vue.prototype.$irc = Vue.irc
        }
    },
    connect(options) {
        this.ircClient.connect(options)
    },
    rawOnMessage(event) {
        console.log(event.message)
    }
}
export default PesterchumIRC