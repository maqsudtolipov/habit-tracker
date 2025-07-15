import {createSlice} from "@reduxjs/toolkit";
import {FAKE_PRORGRESS_DATA} from "@/features/progress/fakeData.ts";

const progressSlice = createSlice({
  name: "progress",
  initialState: FAKE_PRORGRESS_DATA,
  reducers: {},
});

export default progressSlice;
