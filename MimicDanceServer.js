PlayLogs = new Mongo.Collection('play-log');

if (Meteor.isClient) {
    Template.body.helpers({
        playLogs: function () {
            return PlayLogs.find({});
        },
        headerItems: function () {
            var log = PlayLogs.findOne();
            if (log) {
                return Object.keys(log).sort();
            }
            return null;
        }
    });

    Template.playLog.helpers({
        items: function () {
            var playLog = this;
            return Object.keys(playLog).sort().map(function (key) {
                return playLog[key];
            });
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}

Meteor.methods({
    reset: function () {
        PlayLogs.remove({});
    }
});
