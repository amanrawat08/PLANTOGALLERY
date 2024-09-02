/* import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addTC(state, action) {
      state.find((item) => {
        if (item.id !== action.payload.id) {
          return state.push(action.payload);
        }
      });
    },
  },
});
export default UserSlice.reducer;
export const { addTC } = UserSlice.actions;
 */

import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addTC(state, action) {
      // Check if an item with the same id exists
      const exists = state.find((item) => item.id === action.payload.id);

      // Only push the new item if it does not exist
      if (!exists) {
        state.push(action.payload);
      }
    },
  },
});

export default UserSlice.reducer;
export const { addTC } = UserSlice.actions;
