const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// user_id: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// 	references: {
		// 		model: "user",
		// 		key: "id",
		// 	},
		// },
		client_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		client_email: {
			type: DataTypes.STRING,
			allowNull: false,
			// insert email regex
			// validate: {

			// }
		},
		client_phone: {
			type: DataTypes.STRING,
			allowNull: false,
			// insert phone regex
			// validate: {

			// }
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		time: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		min_price: {
			type: DataTypes.DECIMAL(5, 2),
			allowNull: false,
		},
		guests: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "event",
	}
);

module.exports = Event;
