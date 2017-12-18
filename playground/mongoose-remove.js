const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//id 5a37475340913c26597e071d
Todo.findByIdAndRemove('5a37475340913c26597e071d').then((todo) => {
    console.log(todo);
}).catch((e) => console.log(e));