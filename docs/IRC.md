# Connecting to a Pesterchum IRC server

This document exists because there is no real documentation about how to properly "speak" to other Pesterchum users via raw IRC and therefore how to effectively build your own Pesterchum client.

## On connect

When connecting to a Pesterchum IRC server, you will need to send the usual IRC commands in order to establish a successful connection. This means, once you connected to the server, you will need to send:

```irc
NICK [your preferred nickname]
USER pcc31 [the server you're connecting to] [the server you're connecting to] pcc31
```

Why the user has to be `pcc31` I don't know. If I had to guess, I'd say it's the only "real" registered user on the IRC server (next to NICKSERV etc.). I haven't tried using different names, but it's easy enough to test.