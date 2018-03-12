const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const user1Id = new ObjectID();
const user2Id = new ObjectID();
const users = [{
    _id:user1Id,
    email:'parker@example.com',
    password:'User1Pass',
    tokens:[{
        access:'auth',
        token:jwt.sign({_id:user1Id,access:'auth'},'abc123').toString()
    }]
},{
    _id:user2Id,
    email:'steve@example.com',
    password:'User2Pass'
}];

const testTodos = [{
    _id: new ObjectID(),
    text: 'First test todo'
},{
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(testTodos);
    }).then(() => {
        done();
    });
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var user1 = new User(users[0]).save();
        var user2 = new User(users[1]).save();

        return Promise.all([user1,user2]);
    }).then(() => done());
};

module.exports = {
    testTodos,
    populateTodos,
    users,
    populateUsers
};