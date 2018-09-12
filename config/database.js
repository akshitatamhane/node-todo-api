if(process.env.NODE_ENV==production){
module.exports={
    mongoURI:'mongodb://akshita:akshu777@ds153552.mlab.com:53552/todoapp'
}
}
else{
   mongoURI:'mongodb://localhost:27017/TodoApp'
}