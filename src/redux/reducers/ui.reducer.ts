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
  postalLookup :{
    searchCode: number | string | undefined
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
    state.postalLookup = {
      searchCode: undefined
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
      postalLookup: {
        searchCode: undefined,
      }
    }
  }
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState(),
  reducers: {
    updatePostsSearchId: (state, action: PayloadAction<number | undefined>) => {
      state.posts.searchId = action.payload
    },
    updatePostsNewPost: (state, action: PayloadAction<{}>) => {
      state.posts.newPost = {...state.posts.newPost, ...action.payload}
    },
    updatePostsEditPostId: (state, action: PayloadAction<{}>) => {
      state.posts.editPostId = {...state.posts.editPostId, ...action.payload}
    },
    toggleAddModal: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.posts.addModalToggle = !!action.payload
    },
    toggleEditModal: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.posts.editModalToggle = !!action.payload
    },
    updatePostalSearchCode: (state, action: PayloadAction<number | string | undefined>) => {
      state.postalLookup.searchCode = action.payload
    },
  },
})

export const {
  updatePostsSearchId,
  updatePostsNewPost,
  updatePostsEditPostId,
  toggleAddModal,
  toggleEditModal,
  updatePostalSearchCode
} = uiSlice.actions

export const uiReducer = uiSlice.reducer
