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

export const Table = styled.table`
  padding: 12px 0;
  text-align: left
  background-color: #04AA6D;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even){background-color: #f2f2f2;}
  &:hover {background-color: #ddd;}
`;
export const TableHeader = styled.th`
  padding: 12px 0;
  text-align: left;
  background-color: #04AA6D;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableDetail = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  color: black;
  font-size: 14px;
`;


export const EditButton = styled.button`
  background-color: blue;
  border: 1px solid;
  border-radius: 5px;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  background-color: red;
  border: 1px solid;
  border-radius: 5px;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`;

