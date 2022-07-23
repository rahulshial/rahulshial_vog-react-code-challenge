import React from 'react'

import * as Styled from './Home.styles';
interface Props {
post: {title: string, body: string},
setPost: React.Dispatch<React.SetStateAction<any>>,
handleCancelPost: () => void,
savePost: () => void,
}

const Modal = ({post, setPost, handleCancelPost, savePost}: Props) => {

  const handleTextChange = (key: string, value: string) => {
    setPost((prev: any) => ({...prev, [key]: value}));
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
          onClick={handleCancelPost}>
          Cancel
        </Styled.CancelPostButton>
      </Styled.CancelButtonContainer>
    </Styled.PostButtonContainer>
  </Styled.Modal>
  )
}

export default Modal