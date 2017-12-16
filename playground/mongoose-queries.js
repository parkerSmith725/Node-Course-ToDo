const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a35a68fefaf6132f10fed41111';
var userId = '5a345481cea19b1c27f8ece7';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id:id
// }).then((todos) => {
//     if(todos.length <= 0){
//         return console.log('Id not found');
//     }
//     console.log('Todos:',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo:',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id:',todo);
// }).catch((e) => {
//     console.log('The id does not exist');
// });

User.findById(userId).then((user) => {
    if(!user){
        return console.log('User not found');
    }

    console.log('Found User:',user.email);
}).catch((err) => {
    console.log('There was an error:',err);
});