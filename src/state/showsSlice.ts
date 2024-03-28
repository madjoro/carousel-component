import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Show {
  id: number;
  name: string;
  genres: string[];
  image: {
    medium: string;
  };
  summary: string;
}

const initialState = {
  genre: "All",
  shows: [] as Show[],
  selectedShows: [] as Show[],
  startIndex: 0,
  loading: false,
  error: null as string | null | undefined,
};

export const fetchShows = createAsyncThunk("shows/fetchShows", async () => {
  //https://api.tvmaze.com/shows?genre=1 -> ne vrne pravih genre rezultatov
  const url = "https://api.tvmaze.com/shows";
  const response = await axios.get(url);

  return response.data;
});

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    setGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    setSelectedShows(state, action: PayloadAction<Show[]>) {
      state.selectedShows = action.payload;
    },
    setStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.loading = false;
        state.shows = action.payload;
        state.error = null;
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setGenre, setSelectedShows, setStartIndex } = showsSlice.actions;
export default showsSlice.reducer;
