import { createAction } from "@reduxjs/toolkit";

// function userSignUp(userName) {
//   return {
//     type: "USER_SIGNUP",
//     payload: { userName },
//   };
// }

const userSignUp = createAction("USER_SIGNUP");

export { userSignUp };
