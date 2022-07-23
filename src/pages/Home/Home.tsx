/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { 
  useGetAllPostsQuery, 
  useGetPostByIdQuery, 
  useCreatePostMutation } from '../../redux/api/posts.api';
  import { setPostList, deletePost, updatePost } from '../../redux/reducers/posts.reducer';
import { PostEntity } from '../../redux/reducers/Posts.type';
import Modal from './Modal';
import * as Styled from './Home.styles';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const [searchId, setSearchId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  })
  const postsData = useAppSelector(state => state.posts);
  const {data, isError, isLoading} = useGetAllPostsQuery();
  const {data: postData} = useGetPostByIdQuery(searchId);
  const [createPostMutation, {data: addedPost, isSuccess, isError: postError}] = useCreatePostMutation()
  const [rows, setRows] = useState<PostEntity[]>([]);

  useEffect(() => {
    if(data){
      setRows(data)
      dispatch(setPostList(data))
    }
  }, [data, dispatch]);

  useEffect(() => {
    if(postData && searchId > 0) {
      setRows([postData]);
      dispatch(updatePost(postData));
    }
  }, [dispatch, postData, searchId])
  
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  }

  const handleSearchIdChange = (event: any) => {
    setSearchId(event.target.value);
  };

  const handleTextChange = (key: string, value: string) => {
    setNewPost((prev) => ({...prev, [key]: value}));
  }

  const handleCreatePost = () => {
    setOpenModal(false)
    const postBody = {body: {
      title: newPost.title,
      body: newPost.body,
      userId: 123,
    }}
    setNewPost({
      title: '',
      body: '',
    });
    createPostMutation(postBody);
    console.log(postBody)
  };

  const handleCancelPost = () => {
    setOpenModal(false);
    setNewPost({
      title: '',
      body: '',
    });
  };

  return (
    <>
    {openModal && (
      <Styled.Modal>
        <Styled.RowContainer>
          <Styled.PostTitle>Title: </Styled.PostTitle>
        <Styled.InputContainer>
          <form>
            <Styled.PostInput
              type='text'
              placeHolder='title'
              value={newPost.title}
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
              value={newPost.body}
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
            onClick={handleCreatePost}>
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
    )}
    {postsData.length && (
      <><Styled.Header>
          <Styled.AddPostButtonContainer>
            <Styled.AddPostButton onClick={handleToggleModal}>Add Posts</Styled.AddPostButton>
          </Styled.AddPostButtonContainer>
          <Styled.SearchBarContainer>
            <Styled.SearchFormContainer>
              <form>
                <Styled.Input
                  type="number"
                  placeholder="Search.."
                  name="searchId"
                  value={searchId}
                  onChange={handleSearchIdChange}
                  >
                </Styled.Input>
                <Styled.SearchButton
                  type="submit"><i className="fa fa-search"></i>
                </Styled.SearchButton>
              </form>
            </Styled.SearchFormContainer>
          </Styled.SearchBarContainer>
        </Styled.Header><Styled.Table>
            <Styled.TableHead>
              <Styled.TableRow>
                <Styled.TableHeader>Id</Styled.TableHeader>
                <Styled.TableHeader>Title</Styled.TableHeader>
                <Styled.TableHeader>Post</Styled.TableHeader>
                <Styled.TableHeader>Edit</Styled.TableHeader>
                <Styled.TableHeader>Delete</Styled.TableHeader>
              </Styled.TableRow>
            </Styled.TableHead>
            <Styled.TableBody>
              {postsData.map((post) => {
                return (
                    <Styled.TableRow key={post.id}>
                      <Styled.TableDetail>{post.id}</Styled.TableDetail>
                      <Styled.TableDetail>{post.title}</Styled.TableDetail>
                      <Styled.TableDetail>{post.body}</Styled.TableDetail>
                      <Styled.TableDetail>
                        <Styled.EditButton onClick={() => {console.log(post.id)}}>Edit</Styled.EditButton>
                      </Styled.TableDetail>
                      <Styled.TableDetail>
                        <Styled.DeleteButton onClick={() => dispatch(deletePost(post.id))}>Delete</Styled.DeleteButton>
                      </Styled.TableDetail>
                    </Styled.TableRow>
                )
              })}
            </Styled.TableBody>
          </Styled.Table></>
    )}
    </>
  )
}

export default Home;
