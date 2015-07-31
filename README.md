# MimicDanceServer

## Deployment

See the detailed information [here](https://github.com/jordansissel/heroku-buildpack-meteor).

```
heroku login
heroku git:remote -a mimic-dance-server
heroku config:set BUILDPACK_URL=https://github.com/lirbank/meteor-buildpack-horse.git
heroku config:set ROOT_URL=https://mimic-dance-server.herokuapp.com
heroku addons:create mongolab:sandbox
git push heroku master
heroku open
```

## Web Sites
- https://willingringmimic-dance-server.herokuapp.com/
