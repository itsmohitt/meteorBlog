import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Template.feed.onCreated(function(){


});
Template.feed.events({
    'click #saveFeed' : function(e){
        let feedText = $('textarea#feed');
        if(!feedText || !feedText.val()) return;
        Feed.insert({'text': feedText.val(),
                    'owner' : Meteor.userId(),
                    'created_at': Date.now()
            });
        feedText.val('');
    },
    'keyup .makeComment' : function(e){
       if(e.keyCode==13){
           console.log($(e.target).attr('post'));
           Comment.insert({
               'text':e.target.value,
               'owner' : Meteor.userId(),
               'created_at': Date.now(),
               'post':$(e.target).attr('post')
           });
           e.target.value="";
       }
    }
});

Meteor.subscribe("feed");
Meteor.subscribe("comment");
Template.feed.helpers({
    Feed : function(){
        let feeds= Feed.find().fetch();
        feeds.forEach(function(feed){
            console.log(feed._id);
            feed.Comment = Comments(feed._id);
        });
        return feeds;
    },
    author: function() {
        let self = this;
        let email = Call(self.owner,'findUser', self.owner).result();
        return email.address;

    },
    userEmail : function(){
        let user = Meteor.users.findOne({ _id: Meteor.userId() });
        return user.emails[0].address;
    },


});
function Comments(_id){
    return Comment.find({'post':_id}).fetch();

}



