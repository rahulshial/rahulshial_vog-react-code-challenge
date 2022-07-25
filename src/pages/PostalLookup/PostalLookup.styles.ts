import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  flex: .5;
  font-size: 24px;
  text-align: justify;
`;

export const SearchBarContainer = styled.div`
  flex: .5;
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
  text-align: justify;
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