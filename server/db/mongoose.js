var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI||'mongodb://localhost:27017/TodoApp');


module.exports={
    mongoose
};