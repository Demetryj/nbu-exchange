import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRates = createAsyncThunk('rates/fetchRates', async (date, thunkAPI) => {
  try {
    const response = await axios.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`
    );

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
