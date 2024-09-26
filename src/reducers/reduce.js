import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  data: [],
  addlist:false,
  isLoading: false,
  error: false,
}
export const fetchMusics = createAsyncThunk("fetchMusics", async (trackParametersForDefault) => {
  const response = await fetch(
      `https://api.spotify.com/v1/search?q=505&type=track`,
      trackParametersForDefault
  )
      .then((response) => response.json())
      .then((data) => data.tracks.items);
  return response
});

export const fetchSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    addlist:(state)=>{
        if(state.addlist){
            state.addlist=false
        }else{
            state.addlist=true
        }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMusics.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMusics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMusics.rejected, (state) => {
      state.isLoading = false
      state.error = true;
    });
  }
})

export const {addlist} = fetchSlice.actions

export default fetchSlice.reducer