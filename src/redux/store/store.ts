import { configureStore } from "@reduxjs/toolkit";
import projects from "../slicers/slicerProjects";
import resume from "../slicers/slicerResume";

export const store = configureStore({
  reducer: {
    projects,
    resume
  }
});

export type RootState = ReturnType<typeof store.getState>
export type addDispatch = typeof store.dispatch;