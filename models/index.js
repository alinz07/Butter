const User = require("./User");
const Review = require("./Review");
const Event = require("./Event");
const Service = require("./Service");

User.hasMany(Event, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

Event.belongsTo(User, {
	foreignKey: "user_id",
});

Review.belongsTo(User, {
	foreignKey: "user_id",
});

User.hasMany(Review, {
	foreignKey: "user_id",
});

module.exports = { User, Event, Review, Service };
