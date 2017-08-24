import { Meteor } from 'meteor/meteor';
import '../collections/collections';
Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish("feed",function(){
    return Feed.find({});

});
Meteor.publish("comment",function(){
    return Comment.find({});

});