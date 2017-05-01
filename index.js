const express =  require("express")
    , bodyParser = require('body-parser');

const mainCtrl = require('./mainCtrl')
    , config = require('./config');

const app = express();
app.use(bodyParser.json())

app.get('/api/users', mainCtrl.getUsers);
app.get('/api/users/:id', mainCtrl.getUserById);
app.get('/api/admins', mainCtrl.getAdmins);
app.get('/api/nonadmins', mainCtrl.getNonAdmins);
app.get('/api/user_type/:type', mainCtrl.getUserByType);
app.get('/api/non_admins', mainCtrl.getNonAdmins);
app.put('/api/users/:id', mainCtrl.updateUser);
app.post('/api/users', mainCtrl.addUser);
app.delete('/api/users/:id', mainCtrl.removeUser);





app.listen(config.PORT, () => {
  console.log( 'Listening on port: ', config.PORT );
})
