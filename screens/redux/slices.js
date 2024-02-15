import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    images: {
        "Poster Art": {
            url: ""
        }
    }
};

export const userSlice = createSlice({
  name: "media",
  initialState,
  reducers: {

    addmovie: (state, action) => {
      const { title, images } = action.payload;
      state.title = title;
      state.images = images;
    },

    addserie: (state, action) => {
      const { title, images } = action.payload;
      state.title = title;
      state.images = images;
    },
  },
});

export const { addmovie, addserie } = userSlice.actions;
export default userSlice.reducer;
