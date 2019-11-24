const mongoose = require('mongoose');

let db;

module.exports = function Connection(){
    if(!db){
        db = mongoose.createConnection('mongodb://localhost/crud-example', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
  }

  return db;
}