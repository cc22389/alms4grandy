const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise

// Define userSchema
const postSchema = new Schema({

	title: { type: String, unique: false, required: false },
	post: { type: String, unique: false, required: false }

})

// Define schema methods
postSchema.methods = {

}

// Define hooks for pre-saving
postSchema.pre('save', function (next) {
	if (!this.title) {
		console.log('=======NO Title PROVIDED=======')
		next()
	} else {
		console.log('Title in pre save');
		next()
	}
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

