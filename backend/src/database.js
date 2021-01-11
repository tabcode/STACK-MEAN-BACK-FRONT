const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@cluster0.pnst7.mongodb.net/MEAN?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
    .then((db) => console.log('DB Connected'))
    .catch((err) => console.log(err));