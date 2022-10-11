import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import projects from "../../data/Projects";
import { Project } from "../../interfaces";
import { setProjects } from "../slicers/slicerProjects";
import { RootState } from "../store/store";

export const getAllProjects = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response: Project[] = projects;
      dispatch(setProjects(response));
    } catch (error) {
      console.log(error);
    }
  }
};
  