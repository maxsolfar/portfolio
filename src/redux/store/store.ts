import { configureStore } from "@reduxjs/toolkit";
import projects from "../slicers/slicerProjects";

export const store = configureStore({
  reducer: {
    projects,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type addDispatch = typeof store.dispatch;