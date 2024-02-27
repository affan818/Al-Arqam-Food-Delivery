import userModel from "../models/UserModel.js";

// try to create manual users
//pass props 
async function createUser(name, email, password, location) {
  try {
    const user = new userModel({
      name: name,
      email: email,
      password: password,
      location: location,
    });
    // use insert many for add many data in one post
    const result = await user.save();
    console.log(result);
  } catch (error) {
    console.log(`ERROR________${error}`);
  }
}

export default createUser;
