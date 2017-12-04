const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('There was an error connecting to Mongo');
    }
    console.log('Connected to mongo successfully');

    //Delete many
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //Delete one
    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //Find one and delete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });

    //Challenge script
    db.collection('Users').deleteMany({name:'Parker Smith'}).then((result) => {
        console.log(result);

        return db.collection('Users').deleteOne({_id:new ObjectID("5a24e1684f60e0182232fce0")});
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('ERROR:',err);
    });

    //db.close();
});