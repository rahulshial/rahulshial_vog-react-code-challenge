/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useGetPostsQuery } from '../../redux/api/posts.api';
import { PostEntity } from '../../redux/reducers/Posts.type';
import * as Styled from './Home.styles';
import { setPostList, deletePost } from '../../redux/reducers/posts.reducer';

const Home = () => {
  const dispatch = useAppDispatch();
  const {data, isError, isLoading} = useGetPostsQuery()
  const [rows, setRows] = useState<PostEntity[]>([]);
  
  useEffect(() => {
    if(data){
      setRows(data)
      dispatch(setPostList(data))
    }
  }, [data, dispatch]);

  
  return (
    <>
    {rows.length && (

      <><Styled.Header>
          <Styled.AddPostButtonContainer>
            <Styled.AddPostButton onClick={() => console.log('Add Posts Clicked...')}>Add Posts</Styled.AddPostButton>
          </Styled.AddPostButtonContainer>
          <Styled.SearchBarContainer>
            <Styled.SearchFormContainer>
              <form>
                <Styled.Input placeholder="Search.." name="search"></Styled.Input>
                <Styled.SearchButton type="submit"><i className="fa fa-search"></i></Styled.SearchButton>
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
              {rows.map((post) => {
                return (
                  <>
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
                  </>
                );
              })}
            </Styled.TableBody>
          </Styled.Table></>
    )}
      

    </>
  )
}

export default Home;
