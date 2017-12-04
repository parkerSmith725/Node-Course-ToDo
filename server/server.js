const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true });

var Todo = mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

// var newTodo = new Todo({
//     text:'cook dinner'
// });

var newTodo = new Todo({
    text: 'go to bed',
    completed:false,
    completedAt: new Date().getTime()
});

newTodo.save().then((doc) => {
    console.log('Saved todo',doc);
}).catch((err) => {
    console.log('Unable to save todo',err);
});