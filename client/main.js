import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Template.feed.onCreated(function(){


});
Template.feed.events({
    'click #saveFeed' : function(e){
        let feedText = $('textarea#feed');
        if(!feedText || !feedText.val()) return;
        Feed.insert({'text': feedText.val(),'owner' : Meteor.userId()});
        feedText.val('');
    },
    'keypress .makeComment' : function(e){
       if(e.keyCode!=13){
           console.log('typed');
       }
    }
});

Meteor.subscribe("feed");
Meteor.subscribe("comment");
Template.feed.helpers({
    Feed : function(){
        return Feed.find().fetch();
    },

});



