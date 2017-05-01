const users = require('./userData.json');

module.exports = {
  getUsers(req,res) {
    if (req.query.favorites) {
      let favs = [];
      for (var i = 0; i < users.length; i++) {
        if(users[i].favorites.indexOf(req.query.favorites) !== -1) {
          favs.push(users[i])
        }
      }
      return res.status(200).send(favs)
    } else if(req.query.age) {
      return res.status(200).send(users.filter(user => user.age < req.query.age))
    } else if (req.query.lastname) {
      return res.status(200).send(users.filter(user=> user.last_name === req.query.lastname))
    } else if (req.query.email) {
      let user = users.filter(user=>user.email === req.query.email)
      console.log(user);
      return res.status(200).send(user[0]);
    }
     res.status(200).send( users);
  },
  getUserById(req,res) {

    for (var i = 0; i < users.length; i++) {
      if (req.params.id == users[i].id) {
        return res.status(200).send(users[i])
      }
    }
    res.status(404).json(null);
  },
  getAdmins(req,res) {
    let admins = users.filter(user => user.type === 'admin');
    res.status(200).send(admins);
  },
  getNonAdmins(req,res) {
    let nonAdmins = users.filter(user => user.type !== 'admin');
    res.status(200).send(nonAdmins);
  },
  getUserByType(req,res) {
    let userType = users.filter((user)=> {
      return user.type === req.params.type
    })
    res.status(200).send(userType)
  },
  getNonAdmins(req,res) {
    let nonAdmins = users.filter((user)=> {
      return user.type !== 'admin'
    })
    res.status(200).send(nonAdmins)
  },
  updateUser(req,res) {
    // console.log(req.body);
    let u = req.body
      users[u.id - 1].first_name = u.first_name;
      users[u.id - 1].last_name = u.last_name;
      users[u.id - 1].email =u.email;
      users[u.id - 1].gender = u.gender;
      users[u.id - 1].language = u.language;
      users[u.id - 1].age = u.age;
      users[u.id - 1].city = u.city;
      users[u.id - 1].state = u.state;
      users[u.id - 1].type = u.type;
      users[u.id - 1].favorites = u.favorites;

    res.status(200).send(users);

  },
  addUser(req,res) {
    let user = req.body
    user.id = users[users.length - 1].id + 1;
    users.push(user)
    res.status(200).send(users)
  },
  removeUser(req,res) {
    console.log(req.params.id);
    for (let i= 0; i < users.length; i++) {
      if (req.params.id == users[i].id){
        users.splice(i,1)
        return res.status(200).send(users);
      }
    }
  }
}
