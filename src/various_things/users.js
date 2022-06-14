import User from '../Classes/User.js';

let users = [
	new User("Yura_cs", "yurko", "1", require("../Files/Images/App_images/default_user_icon.png")),
];

users[0].status = "admin";

export default users;