import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = {
  points: 15,
};

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.points += 1;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload;
    });
});

export default rewardReducer;
