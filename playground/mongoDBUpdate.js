const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('ERROR CONNECTING:',err);
    }
    console.log('Connected to mongo');

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5a24f005c5e2add16f7a18f4')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log('There was an error',err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:ObjectID('5a24840a0f9dd71617fb1ba9')
    },{
        $set:{
            name:'Parker Smith'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log('ERROR:',error);
    });

    //db.close();
});