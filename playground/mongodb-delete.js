const {MongoClient,ObjectId} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err){
    return console.log('Unable to connect to MongoDb server');
}
console.log('Connected to MongoDb server');

//deleteMany
//db.collection('Todos').deleteMany({text:'walk the dog'}).then( (result)=>{
 //console.log(result);
//});

//deleteOne
//db.collection('Todos').deleteOne({text:'Something to do'}).then( (result)=>{
//console.log(result);
//});

//findOneAndDelete
//db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
 //   console.log(result);
//});


//db.close();
});
