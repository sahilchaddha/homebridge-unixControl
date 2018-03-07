# homebridge-unixcontrol [WIP]

[![Build Status](https://travis-ci.org/sahilchaddha/homebridge-unixcontrol.svg?branch=master)](https://travis-ci.org/sahilchaddha/homebridge-unixcontrol)

## Installation :

```
 $ npm install -g homebridge-unixcontrol
```

### Adding to Homebridge :

`config.json` should be inside `~/.homebridge`

```
platforms: [
                {
                    "platform": "PowerPlatform",
                    "name": "Unix Remote Controls",
                    "ipAddress": "192.168.1.4",
                    "portNumber": "3000"
                },
                {
                    "platform": "MusicPlatform",
                    "name": "Unix Remote Controls",
                    "ipAddress": "192.168.1.4",
                    "portNumber": "3000"
                }
    ]
```