import React, { useState } from 'react';
import { useCreatePostMutation, useUpdatePostByIdMutation } from '../../redux/api/posts.api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createPost, updatePost } from '../../redux/reducers/posts.reducer';
import { toggleAddModal, toggleEditModal, updatePostsNewPost } from '../../redux/reducers/ui.reducer';

import * as Styled from './Home.styles';

const Modal = () => {
  const dispatch = useAppDispatch();
  const addModalToggle = useAppSelector(state => state.ui.posts.addModalToggle);
  const editModalToggle = useAppSelector(state => state.ui.posts.editModalToggle);
  const newPost = useAppSelector(state => state.ui.posts.newPost);
  const editPostId = useAppSelector(state => state.ui.posts.editPostId);
  const [createPostMutation] = useCreatePostMutation();
  const [updatePostMutationById] = useUpdatePostByIdMutation();
  const [localPost, setlocalPost] = useState({
    title: newPost.title,
    body: newPost.body,
  })

  const handleTextChange = (key: string, value: string) => {
    setlocalPost((prev: any) => ({...prev, [key]: value}));
    dispatch(updatePostsNewPost(localPost))
  }

  const handleCancelPostModal = () => {
    if(addModalToggle) {
      dispatch(toggleAddModal(!addModalToggle))
    }
    if(editModalToggle) {
      dispatch(toggleEditModal(!editModalToggle))
    }
    dispatch(updatePostsNewPost({
      title: '',
      body: '',}))
  }

  const savePost = () => {
    if(addModalToggle) {
      const postBody = {
        title: newPost.title,
        body: newPost.body,
        userId: 123,
      }
      createPostMutation(postBody)
      .unwrap()
      .then((res: any) => {
        dispatch(createPost(res))
        dispatch(toggleAddModal(!addModalToggle))
      })
    } else if(editModalToggle) {
      const postBody = {
        id: editPostId.id,
        userId: editPostId.userId,
        title: newPost.title,
        body: newPost.body
      }
      updatePostMutationById(postBody)
      .unwrap()
      .then((res: any) => {
        dispatch(updatePost(res))
        dispatch(toggleEditModal(!editModalToggle))
      })
    }
  }

  return (
    <Styled.Modal>
    <Styled.RowContainer>
      <Styled.PostTitle>Title: </Styled.PostTitle>
      <Styled.InputContainer>
        <form>
          <Styled.PostInput
            type='text'
            placeHolder='title'
            value={localPost.title}
            //@ts-ignore
            onChange={({target: {value: title}}) => handleTextChange("title", title)}
            >
          </Styled.PostInput>
        </form>
      </Styled.InputContainer>
    </Styled.RowContainer>
    <Styled.RowContainer>
      <Styled.PostTitle>Post: </Styled.PostTitle>
      <Styled.InputContainer>
        <form>
          <Styled.PostInput
            type='text'
            placeHolder='post'
            value={localPost.body}
            //@ts-ignore
            onChange={({target: {value: body}}) => handleTextChange("body", body)}
            >
          </Styled.PostInput>
        </form>
      </Styled.InputContainer>
    </Styled.RowContainer>
    <Styled.PostButtonContainer>
      <Styled.SavePostButtonContainer>
        <Styled.SavePostButton
        onClick={savePost}>
          Save Post
        </Styled.SavePostButton>
      </Styled.SavePostButtonContainer>
      <Styled.CancelButtonContainer>
        <Styled.CancelPostButton
          onClick={handleCancelPostModal}>
          Cancel
        </Styled.CancelPostButton>
      </Styled.CancelButtonContainer>
    </Styled.PostButtonContainer>
  </Styled.Modal>
  )
}

export default Modal

