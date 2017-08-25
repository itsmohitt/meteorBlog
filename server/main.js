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
    userDetails:  function (_id){

    return Meteor.users.find({'_id':_id}).fetch();
}
});
