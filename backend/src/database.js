const mongoose = require('mongoose');
mongoose.connect('#', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
    .then((db) => console.log('DB Connected'))
    .catch((err) => console.log(err));