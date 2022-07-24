import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { 
  useGetAllPostsQuery, 
  useGetPostByIdQuery, 
  useDeletePostByIdMutation } from '../../redux/api/posts.api';
import { 
  setPostList,
  deletePost,
  setPostListById } from '../../redux/reducers/posts.reducer';
import {
  toggleAddModal,
  toggleEditModal,
  updatePostsEditPostId,
  updatePostsNewPost, 
  updatePostsSearchId} from '../../redux/reducers/ui.reducer';
import Modal from './Modal';
import { PostEntity } from '../../redux/reducers/Posts.type';
import * as Styled from './Home.styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const postsData = useAppSelector(state => state.posts);
  const {data} = useGetAllPostsQuery();
  const [deletePostMutationById] = useDeletePostByIdMutation();
  const addModalToggle = useAppSelector(state => state.ui.posts.addModalToggle)
  const editModalToggle = useAppSelector(state => state.ui.posts.editModalToggle)
  const searchIdRedux = useAppSelector(state => state.ui.posts.searchId)
  const {data: postData} = useGetPostByIdQuery(searchIdRedux);

  useEffect(() => {
    if(data && !searchIdRedux){
      dispatch(setPostList(data))
    }
  }, [data, dispatch, searchIdRedux]);

  useEffect(() => {
    if (postData && searchIdRedux) {
        dispatch(setPostListById([postData]));
    }
  }, [dispatch, postData, searchIdRedux])
  
  const handleToggleAddModal = () => {
    dispatch(toggleAddModal(!addModalToggle))
  }

  const handleToggleEditModal = (post: PostEntity) => {
    dispatch((updatePostsEditPostId({id: post.id, userId: post.userId})));
    dispatch((updatePostsNewPost({title: post.title, body: post.body})));
    dispatch(toggleEditModal(!editModalToggle));
  }
  
  const handleSearchIdChange = (event: any) => {
    if(event.target.value === "") {
      dispatch(updatePostsSearchId(undefined))
    } else {
      dispatch(updatePostsSearchId(event.target.value))
    }
  };

  const handleDeletePost = (id: number) => {
    deletePostMutationById(id)
    .unwrap()
    .then(() => {
      dispatch(deletePost(id))})
  };


  return (
    <>
      {(addModalToggle || editModalToggle) && (
        <Modal 
        />
      )}
      {postsData.length && (
        <>
          <Styled.Header>
            <Styled.AddPostButtonContainer>
              <Styled.AddPostButton onClick={handleToggleAddModal}>Add Posts</Styled.AddPostButton>
            </Styled.AddPostButtonContainer>
            <Styled.SearchBarContainer>
              <Styled.SearchFormContainer>
                <form>
                  <Styled.Input
                    type="number"
                    placeholder="Search.."
                    name="searchId"
                    value={searchIdRedux}
                    onChange={handleSearchIdChange}
                    >
                  </Styled.Input>
                </form>
              </Styled.SearchFormContainer>
            </Styled.SearchBarContainer>
          </Styled.Header>
          <Styled.Table>
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
                      <Styled.EditButton onClick={() => handleToggleEditModal(post)}>Edit</Styled.EditButton>
                    </Styled.TableDetail>
                    <Styled.TableDetail>
                      <Styled.DeleteButton onClick={() => handleDeletePost(post.id)}>Delete</Styled.DeleteButton>
                    </Styled.TableDetail>
                  </Styled.TableRow>
                )
              })}
            </Styled.TableBody>
          </Styled.Table>
        </>
      )}
    </>
  )
}

export default Home;
