import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
`;

export const AddPostButtonContainer = styled.div`
flex: 1;
`;

export const AddPostButton = styled.button`
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
  width: 50%;
`;

export const SearchBarContainer = styled.div`
  float: right;
`;

export const SearchFormContainer = styled.div`
  float: right;
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background: #ccc;
`;

export const Input = styled.input`
  padding: 6px;
  margin-top: 8px;
  font-size: 16px;
  border: none;
`;

export const SearchButton = styled.button`
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  &:hover {background-color: #ccc;}
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 50%;
  border: 1px solid;
`;

export const PostalCode = styled.h6`
  font-size: 24px;
  margin: 10px;
  `;

export const H6 = styled.h6`
  font-size: 20px;
  margin: 10px;
`;

export const PlacesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PlacesTitleContainer = styled.div`
  flex: .25;
`;

export const PlacesDataContainer = styled.div`
  flex: .75;
  flex-direction: column;
  border: 1px solid;

`;