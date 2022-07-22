import styled from 'styled-components';


export const SearchCountryContainer = styled.div`
  float: right;
`;

export const SearchCountryButton = styled.button`
  background-color: #04AA6D;
  border: 1px solid;
  border-radius: 5px;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  width: 100%;
`;

export const Div = styled.div`
overflow-y: auto;
max-height: 300px;
border: 1px solid;
`;

export const Country = styled.h4`
  display: flex;
  margin: 0;
  justify-content: center;
  background-color: white;
  font-size: 16px;
  border: 0;
  width: 100%;
  text-align: left;

  &:hover, &:focus {
    cursor: pointer;
    font-weight: bold;
    background-color: #ccc;
  }
`;