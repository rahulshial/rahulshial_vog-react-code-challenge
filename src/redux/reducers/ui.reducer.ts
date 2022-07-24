import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface UiState {
  posts: {
    searchId: number,
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
    skip: boolean,
  },
  postalLookup :{
    searchCode: number,
    skip: boolean,

  }
}

const initialState = (): UiState => {
  const localUiState = localStorage.getItem('uiState')
  if (localUiState) {
    const state = (JSON.parse(localUiState) as UiState)
    state.posts = {
      searchId: 0,
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
      skip: true,
    }
    state.postalLookup = {
      searchCode: 0,
      skip: true,
    }
    return state
  } else {
    return {
      posts: {
        searchId: 0,
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
        skip: true,
      },
      postalLookup: {
        searchCode: 0,
        skip: true,
      }
    }
  }
};

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
      console.log(action.payload)
      state.posts.addModalToggle = !!action.payload
    },
    toggleEditModal: (state, action: PayloadAction<boolean>) => {
      state.posts.editModalToggle = !!action.payload
    },
    updatePostalSearchCode: (state, action: PayloadAction<number>) => {
      state.postalLookup.searchCode = action.payload
    },
    updatePostsSkip: (state, action: PayloadAction<boolean>) => {
      state.posts.skip = !!action.payload
    },
    updatePostalLookupSkip: (state, action: PayloadAction<boolean>) => {
      state.postalLookup.skip = !!action.payload
    }
  },
})

export const {
  updatePostsSearchId,
  updatePostsNewPost,
  updatePostsEditPostId,
  toggleAddModal,
  toggleEditModal,
  updatePostalSearchCode,
  updatePostsSkip,
  updatePostalLookupSkip,
} = uiSlice.actions

export const uiReducer = uiSlice.reducer
