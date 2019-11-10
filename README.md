# Momentum Api
Middle layer for fetching Realtime Timetable information from [trafiklab.se (SL)](https://www.trafiklab.se/api)   
Built with `Express` on `Node`.

Supports `GET` `api/v1/timetable/:stationId/:timespan`

## Install

`yarn/npm install`

## Run

Running your application.

The application needs an internal api key ("APIKEYRT4") to be set in your Environment as a variable.
`dotnev` is supported for setting local env variables by adding a `.env` file in root directory.   
`APIKEYRT4=xxxx`

`yarn/npm start`
Application will then be exposed to `localhost` on port `8080` or port from ENV variable ("PORT").

### Docker

Docker Support

### Heroku

Support for hosting on Heroku
