import { Meteor } from 'meteor/meteor';
import '../collections/collections';
Meteor.startup(() => {
    console.log(Meteor.users.find().fetch());
});
Meteor.publish("feed",function(){
    return Feed.find({});

});
Feed.allow({
    insert : function(userId, fields){
        return userId;
    }
});
Meteor.publish("comment",function(){
    return Comment.find({});

});
Comment.allow({
    insert : function(userId, fields){
        return userId;
    }
});
Meteor.methods({
    findUser:  function (_id){
        let user = Meteor.users.findOne({'_id':_id});
        return user.emails[0];
    }
});
