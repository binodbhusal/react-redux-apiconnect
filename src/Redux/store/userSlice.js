import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseAPI = 'https://randomuser.me/api/?results=5';

export const fetchData = createAsyncThunk('users/fetcedData', async ()=>{
   const response = await fetch(baseAPI)
   const data = response.json();
   return data;
});

const initialState = {
user: [],
isLoading: false,
error:'',
}
 const userSlice = createSlice({
    name: 'users',
    initialState,
    reducer:{},
    extraReducers: (builder) => {
      builder.addCase(fetchData.pending, (state) => {
         state.isLoading = true;
         state.error = false;
      });
      builder.addCase(fetchData.fulfilled, (state,action) => {
         state.user = action.payload.results;
         state.isLoading = false;
         state.error = false;
      });
      builder.addCase(fetchData.rejected, (state,action) => {
         state.isLoading = false;
         state.error = true;
      });
    },

 });
 export const { user } =userSlice.actions;
 export default userSlice.reducer;