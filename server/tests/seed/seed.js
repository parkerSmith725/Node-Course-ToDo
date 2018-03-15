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
        token:jwt.sign({_id:user1Id,access:'auth'},process.env.JWT_SECRET).toString()
    }]
},{
    _id:user2Id,
    email:'steve@example.com',
    password:'User2Pass',
    tokens:[{
        access:'auth',
        token:jwt.sign({_id:user2Id,access:'auth'},process.env.JWT_SECRET).toString()
    }]
}];

const testTodos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _creator:user1Id
},{
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333,
    _creator:user2Id
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