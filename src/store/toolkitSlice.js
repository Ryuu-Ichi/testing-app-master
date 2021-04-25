import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  selectedItem: {},
};

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: initialState,
  reducers: {
    fetchPostsSuccess: (state, action) => {
      state.posts = action.payload;
    },
    selectItem: (state, action) => {
      const item = state.posts.find((post) => post.id == action.payload);

      state.selectedItem = item;
    },
  },
});

export default toolkitSlice.reducer;
export const { fetchPostsSuccess, selectItem } = toolkitSlice.actions;
