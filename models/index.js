const User = require("./User");
const Comment = require("./Comment");
const Event = require("./Event");

// User.belongsToMany(Event, {
//     foreignKey: "user_id",
// });

User.hasMany(Event, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

Event.belongsTo(User, {
	foreignKey: "user_id",
});

Comment.belongsTo(User, {
	foreignKey: "user_id",
});

Comment.belongsTo(Event, {
	foreignKey: "event_id",
});

User.hasMany(Comment, {
	foreignKey: "user_id",
});

Event.hasMany(Comment, {
	foreignKey: "post_id",
	onDelete: "CASCADE",
});

module.exports = { User, Event, Comment };
