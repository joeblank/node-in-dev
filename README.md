# Node Assessment

### Setup

1. Run ```npm install``` to install dependencies.
2. Create a file called ```server.js```. All of your server code and endpoints will be in this file.
3. Create a file called ```usersCtrl.js```.  In this file you will write all of the functions for your endpoints.
  - Require the ```userData.json``` file in the ```usersCtrl.js``` file.
  - Don't forget to export the functions that you create in the ```usersCtrl.js``` file.

**NOTE:** You *must* use port **3000** during this assessment.    

### Import Postman tests

**A file named ```node_assessment.postman_collection.json``` is inside the ```postman_testing``` folder. We will import this file in postman.**

1. Open Postman.
2. In the top left corner, click on the ```Import``` button.
  - See images folder, ```image1.png```.
3. Make sure that ```Import File``` is selected / underlined, then click on ```Choose Files```.
4. You will have to navigate to the folder that you cloned this repo in to.
  - You will need to select the ```node_assessment.postman_collection.json``` file (located in the ```postman_testing``` folder).

#### Running the tests

1. Select ```Collections``` on the left side of Postman (next to History).
2. Next to the ```node_assessment``` collection, click on the right arrow.
  - See images folder, ```image2.png```.
3. Select the blue ```Run``` button. This will open up the collection runner.
4. When you are ready to run a test, select the blue ```Start Test``` button at the bottom. When all tests have passed, show your mentor.

**NOTE:** You need to be running ```nodemon``` in order to successfully run the Postman tests.

**NOTE:** The Postman tests manipulate some of the users data. Before you run the Postman tests, you should restart nodemon. You can do this in the terminal while nodemon is running by typing ```rs``` and then pressing ```enter```.

### Endpoints

**Reminder:** You *must* use port **3000** for this assessment.

Write your endpoints in ```server.js```.

1. ```'GET' /api/users```

Respond with the entire users array, with status 200.

This endpoint can be called with one of these queries, which you should be prepared to address:

- favorites: Return all users who have this favorites in their list of favorites.
- age: Return all users who have an age *less* than this age.
- lastname: Return all users whose last name matches.
- email: Return one user whose email matches.

2. ```'GET' /api/users``` + userId

The test will a GET request with the userId as a parameter to this endpoint. Remember, request params will come as strings. If the user is found, respond with status 200 and send that user information. If no user was found, respond with a status 404.

3. ```'GET' /api/admins```

Respond with status 200, and an array of all admins/

4. ```'GET' /api/nonadmins```

Respond with status 200, and an array of all non-admin users.

5. ```'GET' /api/user_type``` + user_type

Respond with status 200, and an array of all users that match the user type parameter.

6. ```'PUT' /api/users/``` + userId

The test will PUT with an object in the body. You should update the user matching userId with this object.

Return with status 200, and the entire array of user object *after* you have update the correct user object.

7. ```'POST' /api/users```

The test will POST with a valid user object in the body. You should add this user and return status 200 along with the entire array of user objects *after* the new user object has been added.

8. ```'DELETE' /api/users/``` + userId

The test will DELETE with a param of a userId. You should remove the user with matching userId, returning status 200 and the array of user objects *after* the correct user object has been deleted.
