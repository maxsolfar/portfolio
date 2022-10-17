import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Education } from '../../interfaces/';
import education from "../../data/Education";

interface EducationState {
  resume: Education[] | null;
  loading: boolean;
}

const initialState: EducationState = {
  resume: [],
  loading: false,
};


export const getEducation = createAsyncThunk<Education[]>(
  'resume/getEducation',
  async (_, thunkAPI) => {
    try {
      return education;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResume: (state: EducationState, action: PayloadAction<Education[]>) => {
      state.resume = action.payload;
    },
  },
});

export const { setResume } = resumeSlice.actions;

export default resumeSlice.reducer;
