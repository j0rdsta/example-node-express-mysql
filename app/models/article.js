// Example model


module.exports = function (sequelize, DataTypes) {

	var Article = sequelize.define('Article', {
		title: {type: DataTypes.STRING, allowNull: false},
		url: {type: DataTypes.STRING, validate: {
			isUrl: true
		}},
		text: DataTypes.STRING
	}, {
		classMethods: {
			associate: function (models) {
				// example on how to add relations
				// Article.hasMany(models.Comments);
			}
		}
	});

	return Article;
};
