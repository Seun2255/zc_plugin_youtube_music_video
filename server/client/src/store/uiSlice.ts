import { createSlice } from "@reduxjs/toolkit";
import store, { RootState } from ".";

const slice = createSlice({
  name: "UI",
  initialState: {
    isLoading: false,
    congrats: false,
    showChat: false,
    addSong: false,
  },
  reducers: {
    loaded: (state, action) => {
      state.isLoading = false;
    },
    congratsToggled: (state, action) => {
      state.congrats = action.payload.congrats;
    },
    toggleChat: (state, action) => {
      state.showChat = action.payload.chat;
    },
    addSongToggle: (state, action) => {
      state.addSong = action.payload.addSong;
    },
  },
});

export const { loaded, congratsToggled, toggleChat, addSongToggle } =
  slice.actions;

const dispatchAddSongToggle = (payload: boolean) => {
  store.dispatch({ type: addSongToggle.type, payload: { addSong: payload } });
};

const dispatchToggleChat = (payload: { chat: boolean }) => {
  store.dispatch({ type: toggleChat.type, payload });
};

export const uiAction = { dispatchAddSongToggle, dispatchToggleChat };

export const selectChat = (state: RootState) => state.ui.showChat;
export const selectPasteUrl = (state: RootState) => state.ui.addSong;

export default slice.reducer;
