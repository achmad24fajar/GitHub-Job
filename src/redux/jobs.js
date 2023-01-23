import { async } from '@firebase/util';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  auth,
  signInWithGooglePopup,
  signOutUser,
} from '../utils/firebase.utils';
import { filterJob, getDetail, getJobLists } from '../global/api';

export const fetchJobLists = createAsyncThunk(
  'fetchJobLists',
  async (key, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(setState({ key: 'loading', value: true }));
      const { page } = key;
      const res = await getJobLists(page);
      if (res.status === 200) {
        dispatch(setState({ key: 'loading', value: false }));
      }
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const fetchFilterJob = createAsyncThunk(
  'fetchFilterJob',
  async (key, { rejectWithValue, getState, dispatch }) => {
    try {
      const { dataFilter } = getState().jobs;
      const { jobDesc, location, fullTime } = dataFilter;

      dispatch(setState({ key: 'loading', value: true }));

      const res = await filterJob(jobDesc, location, fullTime);

      if (res.status === 200) {
        dispatch(setState({ key: 'loading', value: false }));
      }
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const fetchDetail = createAsyncThunk(
  'fetchDetail',
  async (key, { rejectWithValue, getState, dispatch }) => {
    try {
      dispatch(setState({ key: 'loading', value: true }));

      const res = await getDetail(key);

      if (res.status === 200) {
        dispatch(setState({ key: 'loading', value: false }));
      }
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const dataJobs = createSlice({
  name: 'dataJobs',
  initialState: {
    dataUser: auth.currentUser || null,
    dataJobs: [],
    dataFilter: {
      jobDesc: '',
      location: '',
      fullTime: false,
    },
    loading: false,
    dataDetail: [],
  },
  reducers: {
    setState: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.dataFilter = {
        ...state.dataFilter,
        [key]: value,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobLists.fulfilled, (state, action) => {
      state.dataJobs =
        state.dataJobs.length === 0
          ? action.payload.data
          : state.dataJobs.concat(action.payload.data);
    });

    builder.addCase(fetchFilterJob.fulfilled, (state, action) => {
      state.dataJobs = action.payload.data;
    });

    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      console.log(action.payload);
      state.dataDetail = action.payload.data;
    });
  },
});

export const LoginUser = () => async () => {
  try {
    await signInWithGooglePopup().then(() => {
      window.location.pathname = '/jobs';
    });
  } catch (err) {
    console.log(err);
  }
};

export const LogoutUser = () => async () => {
  try {
    await signOutUser().then(() => {
      window.location.pathname = '/';
    });
  } catch (err) {
    console.log(err);
  }
};

const { actions, reducer } = dataJobs;
export const { setState, setFilter } = actions;

export default reducer;
