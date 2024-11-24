import { createSlice } from '@reduxjs/toolkit';

import { fetchRates } from './operations';

const ratesSlice = createSlice({
  name: 'rates',
  initialState: {
    rateItems: [],
    modifiedRates: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    modifyRate: (state, action) => {
      const { code, newRate } = action.payload;

      const existingRate = state.rateItems.find(rate => rate.cc === code);

      if (existingRate) {
        existingRate.rate = newRate;

        const modified = state.modifiedRates.find(rate => rate.cc === code);

        if (modified) {
          modified.rate = newRate;
        } else {
          state.modifiedRates.push(existingRate);
        }
      }
    },

    getModifiedRates: (state, action) => {
      state.modifiedRates = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchRates.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rateItems = action.payload;
        state.error = null;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { modifyRate, getModifiedRates } = ratesSlice.actions;

export const ratesReducer = ratesSlice.reducer;
