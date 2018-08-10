const {MongoClient,ObjectId} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err){
    return console.log('Unable to connect to MongoDb server');
}
console.log('Connected to MongoDb server');
//db.collection('Todos').find({_id:new ObjectId('5b6aac42b05eaa11e9e9bf4f')}).toArray().then((docs)=>{
   // console.log('Todos');
   // console.log(JSON.stringify(docs,undefined,2));
//},(err)=>{
   // console.log('Unable to fetch todos',err)
//})

//db.collection('Todos').find().count().then((count)=>{
 //   console.log(`Todos count:${count}`);
//},(err)=>{
  //  console.log('Unable to fetch todos',err)
//})
db.collection('Users').find({name:'andrew'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
});

//db.close();
});
