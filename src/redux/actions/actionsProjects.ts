import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import projects from "../../data/Projects";
import education from "../../data/Education";
import { Project, Education } from "../../interfaces";
import { setProjects } from "../slicers/slicerProjects";
import { RootState } from "../store/store";
import { setResume } from "../slicers/slicerResume";

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
  
export const getAllResume = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response: Education[] = education;
      dispatch(setResume(response));
    } catch (error) {
      console.log(error);
    }
  }
};