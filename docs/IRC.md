# Connecting to a Pesterchum IRC server

This document exists because there is no real documentation about how to properly "speak" to other Pesterchum users via raw IRC and therefore how to effectively build your own Pesterchum client.

## On connect

When connecting to a Pesterchum IRC server, you will need to send the usual IRC commands in order to establish a successful connection. This means, once you connected to the server, you will need to send:

```irc
/NICK [your preferred nickname]
/USER [a username] [the server you're connecting to] [the server you're connecting to] [a username]
```

For the original Pesterchum client, the username was set to `pcc31`, presumeably meaning "Pesterchum Client 3.14" but shorted. The web client will follow this naming scheme and will use `wpc10` for "Web Pesterchum 1.0" and will increase the version accordingly.

After connecting, you should join the #pesterchum channel, as this is the channel used for communicating state updates, like colour and status.

```irc
/JOIN #pesterchum
```

After connecting, the default Pesterchum client sends its' own mood and then requests the moods from all friends:

```irc
MOOD >0
GETMOOD ectoBiologist
```

## Pesterchum commands

These commands are sent in the `#pesterchum` channel, so make sure to send them in there. Sending these in other channels will **not** work.

**Important:** These commands do not receive the usual command prefix (/) but are rather sent as regular messages. The clients will parse these messages and update their users and states accordingly.

* `MOOD >[mood number]` - Sets the mood of your client. The list of moods can be found [here](./Moods.md)
* `GETMOOD [nick names delimited by nothing]` - Requests the mood of all specified users.
* `COLOR >[red value between 0 and 255],[green value between 0 and 255],[blue value between 0 and 255]` - Announces your chat colour to be this colour.

## Memo commands

These commands are sent in any other channel than `#pesterchum` and are used for memos.

* `PESTERCHUM:TIME>` - Still has to be looked into
