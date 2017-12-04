//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    // db.collection('Todos').insertOne({
    //     completed:false,
    //     text:'I need to do this'
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    //Insert new Doc into Users (age,name,location)
    // db.collection('Users').insertOne({
    //     name:'Parker Smith',
    //     age:25,
    //     location:'Calgary'
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to insert new User');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});