import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../interfaces/';
import projects from '../../data/Projects';

interface ProjectState {
  projects: Project[] | null;
  singleProject: Project | null;
  loading: boolean;
  errors: any;
}

const initialState: ProjectState = {
  projects: [],
  singleProject: null,
  loading: false,
  errors: null,
};


export const getProjects = createAsyncThunk<Project[]>(
  'projects/getProjects',
  async (_, thunkAPI) => {
    try {
      return projects;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state: ProjectState, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
