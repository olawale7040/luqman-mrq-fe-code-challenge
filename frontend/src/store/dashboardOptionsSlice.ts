import { createSlice } from '@reduxjs/toolkit';

interface StoreState {
  activeSymbol: string | null;
  showCardInfo: boolean;
}

const initialState: StoreState = {
  activeSymbol: '',
  showCardInfo: true
};

export const dashboardOptionsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    toggleShowCardInfo: (state) => {
      state.showCardInfo = !state.showCardInfo;
    },
    setActiveSymbol: (state, action) => {
      state.activeSymbol = action.payload;
    }
  }
});

export const { toggleShowCardInfo, setActiveSymbol } = dashboardOptionsSlice.actions;

export const selectShowCardInfo = (state: { store: StoreState }) => state.store.showCardInfo;

export const selectActiveSymbol = (state: { store: StoreState }) => state.store.activeSymbol;

export default dashboardOptionsSlice.reducer;
