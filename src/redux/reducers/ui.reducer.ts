import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface UiState {
  posts: {
    searchId: number | undefined,
    newPost: {
      title: string,
      body: string,
    }
    editPostId: {
      id: number,
      userId: number,
    },
    addModalToggle: boolean,
    editModalToggle: boolean,
  },
  country:{
    selectedCountry: string,
  }
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
      editPostId: {
        id: 0,
        userId: 0,
      },
      addModalToggle: false,
      editModalToggle: false,
    }
    state.country = {
      selectedCountry: 'Canada',
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
        editPostId: {
          id: 0,
          userId: 0,
        },
        addModalToggle: false,
        editModalToggle: false,
      },
      country: {
        selectedCountry: 'Canada',
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
    updatePostsEditPostId: (state, action: PayloadAction<{}>) => {
      state.posts.editPostId = {...state.posts.editPostId, ...action.payload}
    },
    toggleAddModal: (state, action: PayloadAction<boolean>) => {
      state.posts.addModalToggle = !!action.payload
    },
    toggleEditModal: (state, action: PayloadAction<boolean>) => {
      state.posts.editModalToggle = !!action.payload
    },
    updateSelectedCountry: (state, action: PayloadAction<string>) => {
      state.country.selectedCountry = action.payload
    },
  },
})

export const {
  updatePostsSearchId,
  updatePostsNewPost,
  updatePostsEditPostId,
  toggleAddModal,
  toggleEditModal,
  updateSelectedCountry
} = uiSlice.actions

export const uiReducer = uiSlice.reducer
