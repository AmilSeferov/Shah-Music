import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  addlist:false,
  isLoading: false,
  error: false,
}
export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const data = await axios(
    "http://localhost:5000/books"
  );
  return data.data;
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
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isLoading = false
      state.error = true;
    });
  }
})

export const {addlist} = fetchSlice.actions

export default fetchSlice.reducer