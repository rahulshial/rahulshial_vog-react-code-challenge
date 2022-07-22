/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
// import { posts } from './data';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useGetPostsQuery } from '../../redux/api/posts.api';
import { PostEntity } from '../../redux/reducers/Posts.type';
import * as Styled from './Home.styles';

const Home = () => {
  const {data, isError, isLoading} = useGetPostsQuery()
  const [rows, setRows] = useState<PostEntity[]>([]);
  
  useEffect(() => {
    if(data){
      setRows(data)
      setRows(() => (
        data.map((postItem: PostEntity) => {
          return {
            userId: postItem.userId,
            id: postItem.id,
            title: postItem.title,
            body: postItem.body,
          }
        })
      ))
    }
  }, [data]);
  
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
                        <Styled.EditButton>Edit</Styled.EditButton>
                      </Styled.TableDetail>
                      <Styled.TableDetail>
                        <Styled.DeleteButton>Delete</Styled.DeleteButton>
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
