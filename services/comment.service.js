const Comment = require('../models/comment.model')



async function addComment(data) {

}

async function deleteCommentByPost(post) {
    try {
        const deleteMany = await Comment.deleteMany({post});

        if(deleteMany.ok === 1 && deleteMany.n === deleteMany.deletedCount) {
            console.log("Deleted all comment belong to post successful");
        } else {
            throw "Deleted all comment fail!";
        }

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}


module.exports = {
    deleteCommentByPost,
    addComment
}