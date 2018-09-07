const {MongoClient,ObjectId} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err){
    return console.log('Unable to connect to MongoDb server');
}
console.log('Connected to MongoDb server');



db.collection('Todos').findOneAndUpdate({
    _id:new ObjectId('5b6e8a5d5b2711ebcd63f596')
},{
  $set:{
    completed:true
  }
},{
    returnOriginal:false
}).then((result)=>{
    console.log(result);
})

//db.close();
});
