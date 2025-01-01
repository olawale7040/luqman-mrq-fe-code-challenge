import { createSlice } from '@reduxjs/toolkit';

interface StoreState {
  activeSymbol: string | null;
  showCardInfo: boolean;
  selectedCardId: string | null;
}

const initialState: StoreState = {
  activeSymbol: '',
  showCardInfo: true,
  selectedCardId: null
};

export const dashboardOptionsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    toggleShowCardInfo: (state) => {
      state.showCardInfo = !state.showCardInfo;
    },
    setSelectedCardId: (state, action) => {
      state.selectedCardId = action.payload;
    }
  }
});

export const { toggleShowCardInfo, setSelectedCardId } = dashboardOptionsSlice.actions;

export const selectShowCardInfo = (state: { store: StoreState }) => state.store.showCardInfo;

export const selectSelectedCardId = (state: { store: StoreState }) => state.store.selectedCardId;

export default dashboardOptionsSlice.reducer;
