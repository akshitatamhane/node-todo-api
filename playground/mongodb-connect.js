const {MongoClient,ObjectId} =require('mongodb');

var obj=new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err){
    return console.log('Unable to connect to MongoDb server');
}
console.log('Connected to MongoDb server');

db.close();
});
