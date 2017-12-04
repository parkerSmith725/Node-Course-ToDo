//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    // db.collection('Todos').find({
    //     _id:new ObjectID('5a2483062c5f9116102930be')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }).catch((err) => {
    //     console.log('There was an error',err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:',count);
    // }).catch((err) => {
    //     console.log('There was an error',err);
    // });

    db.collection('Users').find({name:'Parker Smith'}).toArray().then((docs) => {
        console.log('Users:');
        console.log(docs);

        return db.collection('Users').find({name:'Parker Smith'}).count();
    }).then((count) => {
        console.log('There were',count,'rows found');
    }).catch((err) => {
        console.log('ERROR:',err);
    });

    //db.close();
});