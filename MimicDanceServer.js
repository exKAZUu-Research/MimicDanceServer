PlayLogs = new Mongo.Collection('PlayLogs');
PreQuestionnaireResults = new Mongo.Collection('PreQuestionnaireResults');
PostQuestionnaireResults = new Mongo.Collection('PostQuestionnaireResults');

if (Meteor.isClient) {
    Template.body.helpers({
        playLogs: function () {
            return PlayLogs.find({});
        },
        preQuestionnaireResults: function () {
            return PreQuestionnaireResults.find({});
        },
        postQuestionnaireResults: function () {
            return PostQuestionnaireResults.find({});
        },
        playLogsHeaderItems: function () {
            var log = PlayLogs.findOne();
            if (log) {
                return Object.keys(log).sort();
            }
            return null;
        },
        preQuestionnaireResultHeaderItems: function () {
            var log = PreQuestionnaireResults.findOne();
            if (log) {
                return Object.keys(log).sort();
            }
            return null;
        },
        postQuestionnaireResultHeaderItems: function () {
            var log = PostQuestionnaireResults.findOne();
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

    Template.preQuestionnaireResult.helpers({
        items: function () {
            var item = this;
            return Object.keys(item).sort().map(function (key) {
                return item[key];
            });
        }
    });

    Template.postQuestionnaireResult.helpers({
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
