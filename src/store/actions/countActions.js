import { createAction } from "@reduxjs/toolkit";

const countIncrement = createAction("COUNT_INCREMENT");
const countDicrement = createAction("COUNT_DICREMENT");
const countClear = createAction("COUNT_CLEAR");

export { countIncrement, countDicrement, countClear };
