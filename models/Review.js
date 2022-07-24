const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		review_text: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		customer_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// user_id: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// 	references: {
		// 		model: "user",
		// 		key: "id",
		// 	},
		// 	onDelete: "CASCADE",
		// },
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "review",
	}
);

module.exports = Review;
