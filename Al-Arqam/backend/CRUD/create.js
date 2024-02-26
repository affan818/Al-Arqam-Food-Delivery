import userModel from "../models/UserModel.js";

// try to create manual users
async function createUser() {
  try {
    const user = new userModel({
      name: "sidra",
      email: "fffd@fb.vom",
      password: "12354",
      location: "nagpur",
    });
    const user2 = new userModel({
      name: "imran ahmad ansari",
      email: "fffd@fb.vom",
      password: "12354",
      location: "nagpur",
    });
    // use insert many for add many data in one post
    const result = await userModel.insertMany([user, user2]);
    console.log(result);
  } catch (error) {
    console.log(`ERROR________-`);
  }
}

export default createUser;
