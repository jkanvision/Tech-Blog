// post belongs to one user; post will have many comments; comment will have one user
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: "user_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
  });

module.exports = { User, Post, Comment };