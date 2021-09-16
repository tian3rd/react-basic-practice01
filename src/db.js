const mongoose = require('mongoose');

module.exports = {
  connect: DB_HOST => {
    // use Mongo driver's updated URL string parser
    mongoose.set('useNewUrlParser', true);
    // use findOneAndUpdate() in place of findAndModify()
    mongoose.set('useFindAndModify', false);
    // use createIndex in place of ensureIndex()
    mongoose.set('useCreateIndex', true);
    // use new server discovery and monitoring engine
    mongoose.set('useUnifiedTopology', true);
    // connect to DB
    mongoose.connect(DB_HOST);
    // log an error if failed
    mongoose.connection.on('error', err => {
      console.error(err);
      console.log('Mongoose connection failed.');
      process.exit();
    });
  },

  close: () => {
    mongoose.connection.close();
  }
};
