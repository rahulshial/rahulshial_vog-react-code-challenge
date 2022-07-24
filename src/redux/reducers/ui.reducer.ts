import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { PostEntity } from "./Posts.type"

export interface UiState {
  posts: {
    searchId: number | undefined,
    newPost: {
      title: string,
      body: string,
    }
    addModalToggle: boolean,
    editModalToggle: boolean,
  },
}

const initialState = (): UiState => {
  const localUiState = localStorage.getItem('uiState')
  if (localUiState) {
    const state = (JSON.parse(localUiState) as UiState)
    state.posts = {
      searchId: undefined,
      newPost: {
        title: '',
        body: '',
      },
      addModalToggle: false,
      editModalToggle: false,
    }
    return state
  } else {
    return {
      posts: {
        searchId: undefined,
        newPost: {
          title: '',
          body: '',
        },
        addModalToggle: false,
        editModalToggle: false,
      },
    }
  }
}


export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState(),
  reducers: {
    updatePostsSearchId: (state, action: PayloadAction<number>) => {
      state.posts.searchId = action.payload
    },
    updatePostsNewPost: (state, action: PayloadAction<{}>) => {
      state.posts.newPost = {...state.posts.newPost, ...action.payload}
    },
    toggleAddModal: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.posts.addModalToggle = !!action.payload
    },
    toggleEditModal: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.posts.editModalToggle = !!action.payload
    }
  },
})

export const {
  updatePostsSearchId,
  updatePostsNewPost,
  toggleAddModal,
  toggleEditModal,
} = uiSlice.actions

export const uiReducer = uiSlice.reducer
