import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleAddModal, toggleEditModal, updatePostsNewPost } from '../../redux/reducers/ui.reducer';

import * as Styled from './Home.styles';
interface Props {
  savePost: () => void,
}

const Modal = ({ savePost}: Props) => {
  const dispatch = useAppDispatch();
  const addModalToggle = useAppSelector(state => state.ui.posts.addModalToggle);
  const editModalToggle = useAppSelector(state => state.ui.posts.editModalToggle);
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const handleTextChange = (key: string, value: string) => {
    setPost((prev: any) => ({...prev, [key]: value}));
    dispatch(updatePostsNewPost(post))
    dispatch(updatePostsNewPost(post))
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
  
  return (
    <Styled.Modal>
    <Styled.RowContainer>
      <Styled.PostTitle>Title: </Styled.PostTitle>
      <Styled.InputContainer>
        <form>
          <Styled.PostInput
            type='text'
            placeHolder='title'
            value={post.title}
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
            value={post.body}
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