PlayLogs = new Mongo.Collection('play-log');
QuestionnaireResults = new Mongo.Collection('questionnaire-result');

if (Meteor.isClient) {
    Template.body.helpers({
        playLogs: function () {
            return PlayLogs.find({});
        },
        playLogsHeaderItems: function () {
            var log = PlayLogs.findOne();
            if (log) {
                return Object.keys(log).sort();
            }
            return null;
        },
        questionnaireResultHeaderItems: function () {
            var log = QuestionnaireResults.findOne();
            if (log) {
                return Object.keys(log).sort();
            }
            return null;
        }
    });

    Template.playLog.helpers({
        items: function () {
            var item = this;
            return Object.keys(item).sort().map(function (key) {
                return item[key];
            });
        }
    });

    Template.questionnaireResult.helpers({
        items: function () {
            var item = this;
            return Object.keys(item).sort().map(function (key) {
                return item[key];
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
