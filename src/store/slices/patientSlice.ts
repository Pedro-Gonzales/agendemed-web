import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PatientService } from '../../services/patientService';

interface PatientState {
    list: any[];
    loading: boolean;
    error: string | null;
    pagination: {
      page: number;
      total: number;
    };
  }
  
  const initialState: PatientState = {
    list: [],
    loading: false,
    error: null,
    pagination: {
      page: 1,
      total: 0
    }
  };
  
  export const fetchPatients = createAsyncThunk(
    'patients/fetchAll',
    async (params: { page: number; search?: string }, { rejectWithValue }) => {
      try {
        return await PatientService.getAll(params);
      } catch (error: any) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );
  
  export const createPatient = createAsyncThunk(
    'patients/create',
    async (patientData: any, { rejectWithValue }) => {
      try {
        return await PatientService.create(patientData);
      } catch (error: any) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );
  
  const patientSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPatients.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchPatients.fulfilled, (state, action) => {
          state.loading = false;
          state.list = action.payload.data;
          state.pagination = {
            page: action.payload.page,
            total: action.payload.total
          };
        })
        .addCase(fetchPatients.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
        .addCase(createPatient.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createPatient.fulfilled, (state, action) => {
          state.loading = false;
          state.list.unshift(action.payload);
        })
        .addCase(createPatient.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    }
  });
  
  export default patientSlice.reducer;