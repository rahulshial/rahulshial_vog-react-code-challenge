/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { 
  useGetAllPostsQuery, 
  useGetPostByIdQuery, 
  useCreatePostMutation,
  useUpdatePostByIdMutation,
  useDeletePostByIdMutation } from '../../redux/api/posts.api';
  import { 
    setPostList,
    deletePost,
    updatePost,
    createPost, 
    setPostListById } from '../../redux/reducers/posts.reducer';
import Modal from './Modal';
import * as Styled from './Home.styles';
import { PostEntity } from '../../redux/reducers/Posts.type';
import { toggleAddModal, toggleEditModal, updatePostsNewPost } from '../../redux/reducers/ui.reducer';

const Home = () => {
  const dispatch = useAppDispatch();
  const [searchId, setSearchId] = useState(0);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  // const [newPost, setNewPost] = useState({
  //   title: '',
  //   body: '',
  // })
  const [localPostId, setLocalPostId] = useState({
    id: 0,
    userId: 0,
  })
  const postsData = useAppSelector(state => state.posts);
  const {data} = useGetAllPostsQuery();
  const {data: postData} = useGetPostByIdQuery(searchId);
  const [createPostMutation] = useCreatePostMutation();
  const [deletePostMutationById] = useDeletePostByIdMutation();
  const [updatePostMutationById] = useUpdatePostByIdMutation();
  const addModalToggle = useAppSelector(state => state.ui.posts.addModalToggle)
  const editModalToggle = useAppSelector(state => state.ui.posts.editModalToggle)
  const newPost = useAppSelector(state => state.ui.posts.newPost)

  useEffect(() => {
    if(data){
      dispatch(setPostList(data))
    }
  }, [data, dispatch]);

  useEffect(() => {
    if(postData && searchId > 0) {
      dispatch(setPostListById([postData]));
    }
  }, [dispatch, postData, searchId])
  
  const handleToggleAddModal = () => {
    setOpenAddModal(!openAddModal);
    dispatch(toggleAddModal(!addModalToggle))
  }

  const handleToggleEditModal = (post: PostEntity) => {
    // setNewPost({title: post.title, body: post.body})
    setLocalPostId({id: post.id, userId: post.userId})
    setOpenEditModal(!openEditModal);
    dispatch(toggleEditModal(!editModalToggle))  
  }
  

  const handleSearchIdChange = (event: any) => {
    setSearchId(event.target.value);
  };

  const handleCreatePost = () => {
    setOpenAddModal(false)
    const postBody = {
      title: newPost.title,
      body: newPost.body,
      userId: 123,
    }
    // setNewPost({
    //   title: '',
    //   body: '',
    // });
    createPostMutation(postBody)
    .unwrap()
    .then((res: any) => {
      dispatch(createPost(res))
    })
  };

  const handleCancelPost = () => {
    dispatch(toggleAddModal(!addModalToggle))
    dispatch(updatePostsNewPost({
      title: undefined,
      body: undefined,}))
  };

  const handleDeletePost = (id: number) => {
    deletePostMutationById(id)
    .unwrap()
    .then((res) => {
      dispatch(deletePost(id))})
  };
  
  const handleUpdatePost = () => {
    setOpenEditModal(false)
    const postBody = {
      id: localPostId.id,
      userId: localPostId.userId,
      title: newPost.title,
      body: newPost.body
    }
    updatePostMutationById(postBody)
    .unwrap()
    .then((res: any) => {
      dispatch(updatePost(res))
    })
  }

  return (
    <>
      {addModalToggle && (
        <Modal 
        savePost={handleCreatePost}
        />
      )}
      {editModalToggle && (
        <Modal 
        savePost={handleUpdatePost}
        />
      )}
      {postsData.length && (
        <><Styled.Header>
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
                          <Styled.EditButton onClick={() => handleToggleEditModal(post)}>Edit</Styled.EditButton>
                        </Styled.TableDetail>
                        <Styled.TableDetail>
                          <Styled.DeleteButton onClick={() => handleDeletePost(post.id)}>Delete</Styled.DeleteButton>
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
