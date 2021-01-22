# Pesterchum

This is the repository for the WIP Pesterchum web application, located [here](https://cozygalvinism.github.io/pesterchum)!

It consists of multiple parts:

1. The actual web app
2. The gateway for the IRC connection
3. The documentation for handling the "Pesterchum protocol"

## The web app

The web app is written in Vue and is my first ever Vue project. I'm apologizing, if the code is written badly, if you have suggestions on how to improve it, please create a pull request or an issue!

The web app itself runs entirely in the browser, so nothing is stored on any server, only on your device. It is also installable through the magic of service workers, which means, that it acts like an independant app (you can see this beautifully on Android phones, because web apps are listed in the app list as regular installed apps!). It also features *some* theming options and, while it isn't as themeable as the original client, you can always provide your own theme using a pull request and let me merge it. If you do so, please create a theme for both light and dark mode. You can already natively change the colour of the app in the settings, if the yellow is too bright for you. The base theme is provided by vue-material, but this may change in the future, depending if I can actually implement a very own theme engine.

So far, the entire app CAN work offline, but you obviously won't be able to chat with people if you're not online, since you can't reach the actual servers. But you can at least change your preferences of the app!

While developing the web app, I have encountered an issue, which would have been a real show stopper: Chrome and Firefox will not let you connect to the usual IRC ports. This is most likely to prevent abuse and it's not circumventable by normal means. However, since I don't like giving up, [I found a gateway server program, made by and for KiwiIRC](https://github.com/kiwiirc/webircgateway).

## The gateway for the IRC connection

The webircgateway is a simple Websocket gateway to IRC networks, which allows for connecting to IRC servers after all. It also has a builtin abuse prevention by forcing the user to solve a captcha (The Pesterchum app will include an invisible captcha, so you don't need to worry). I am hosting such a server [here](https://ircgw.galvinism.ink) and will continue to do so. As far as I'm aware, there is little to no logging if the program is ran on the Warning log level, which is what I am going to do. [In order to make hosting this server easier, I initially used a Docker image made by jtbouse (or UGNS)](https://hub.docker.com/r/jtbouse/webircgateway), but this proved to be flawed, as the Docker image didn't have any ca-certificates installed (which are needed for the captcha check), so I modified the Dockerfile to my needs and am hosting it here as well, along with a default config. I personally use this default config, though slightly modified to use my captcha key and secret. For even more convenience, I wrote a docker-compose.yml file, which mounts the configuration file for the gateway, so you don't even have to do anything (except putting in your own captcha key and secret and setting up a reverse proxy) except running `docker-compose up -d` while you are in this directory (given you installed Docker; please do not create issues for this project related to the webircgateway).

If you want to test the IRC gateway, connect to my IRC gateway via Websocket at `wss://ircgw.galvinism.ink/webirc/websocket/` while at the same time, open up [this website](https://cozygalvinism.github.io/pesterchum/manualcaptcha.html) and send the following messages in this order (you will not receive a response for each of these commands):

```irc
HOST pesterchum.xyz:6667
NICK ectoBiologist
USER pcc31 pesterchum.xyz pesterchum.xyz pcc31
CAPTCHA [the captcha string you see when opening the website without the square brackets]
```

This should let you connect to the IRC server and display the MOTD. You might get kicked off right away if you don't respond to PINGs accordingly, but as a PoC it works. Obviously the Pesterchum client handles the nitty-gritty IRC communication on its' own, as well as the handling of the "Pesterchum protocol".

## The documentation for handling the "Pesterchum protocol"

Because there was little to no information on how Pesterchum is working behind the scenes, I was pretty much forced to dig through the Pesterchum source code which usually wouldn't be an issue, but since the entire application is over **10 years old**, there's a ton of old coding practices as well as the source code running on the very much outdated Python 2.7 and Qt 4 engine. There are some forks, that claim to convert Pesterchum into a Python 3 + Qt 5 application, but so far, I haven't been able to find a version that's working properly.

Because I am a nice guy, I want to spare anyone this ridiculous task of reading source code and trying to understand it, so I am documenting everything to know about the Pesterchum protocol.

I will also mark this version of the protocol **v1**. In the future, I may implement features, that the normal Pesterchum client will not be able to process, which will run under a different protocol version (let's call this **v2**), though this version will be fully backwards compatible in order to not entirely break the old clients.

The documentation can eventually be found at the wiki of this repository.

## Credits

* illuminatedwax - for creating the original Pesterchum client and providing the server for it for the longest time
* AstoriaFloyd - for modifying the original client to allow for multiple server selection
* turntechCatnip and chaoticCharacte - for hosting alternative Pesterchum servers and therefore keeping the client running
* KiwiIRC - for providing the webircgateway package
* GitHub - for hosting the web app

Please let me know if I missed someone or got something wrong :)