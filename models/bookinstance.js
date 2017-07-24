var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = Schema({
  book : {type: Schema.ObjectId,ref:'Book',required:true},
  imprint : {type: String, required:true},
  status: {type: String, required:true,enum['Available','Maintenance','Loaned','Reserved'],default:'Maintenance'},
  due_back: {type: Date, default:Date.now},
})

//Virtual For bookinstances' url
.virtual('url')
.get(function(){
  return '/catalog/bookinstance/'+this._id;
});

//Export modele

module.exports = mongoose.model('BooksInstance',BookInstanceSchema)
