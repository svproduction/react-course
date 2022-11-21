import { createReducer } from "@reduxjs/toolkit";

const countReducer = createReducer(
  {
    count: 0,
  },
  (builder) => {
    builder
      .addCase("COUNT_INCREMENT", (store) => {
        const newCount = store.count + 1;
        return { ...store, count: newCount };
      })
      .addCase("COUNT_DICREMENT", (store) => {
        const newCount = store.count - 1;
        return { ...store, count: newCount };
      })
      .addCase("COUNT_CLEAR", (store) => {
        return { ...store, count: 0 };
      });
  }
);

export default countReducer;
