import { createReducer } from "@reduxjs/toolkit";

// function userReducer(store = {}, action) {
//   switch (action.type) {
//     case "USER_SIGNUP": {
//       return store.concat(action.payload);
//     }
//     case "USER_DELETED": {
//       return { ...store, ...action.payload };
//     }
//     default:
//       return store;
//   }
// }

// export default userReducer;

const defaultUserReducer = {
  userName: "test",
};
const userReducer = createReducer(defaultUserReducer, (builder) => {
  builder
    .addCase("USER_SIGNUP", (store, action) => {
      return { ...store, ...action.payload };
    })
    .addCase("USER_DELETED", (store, action) => {
      return { ...store, ...action.payload };
    });
});

export default userReducer;
