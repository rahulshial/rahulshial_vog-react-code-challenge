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
    state.country = {
      selectedCountry: 'Canada',
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
  updateSelectedCountry,
  updatePostalSearchCode,
  updatePostsSkip,
  updatePostalLookupSkip,
} = uiSlice.actions

export const uiReducer = uiSlice.reducer
