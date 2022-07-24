import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  text-align: justify;
  align-items: center;
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
  width: 30%;
`;

export const SearchBarContainer = styled.div`
  float: right;
  margin-bottom: 10px;
`;

export const SearchFormContainer = styled.div`
  float: right;
  padding: 6px 10px;
  background: #ddd;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background: #ccc;
`;

export const Input = styled.input`
  padding: 6px;
  margin: 6px 0;
  font-size: 16px;
  border: none;
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
  text-align: justify;
`;

export const EditButton = styled.button`
  background-color: white;
  border: 1px solid;
  border-radius: 5px;
  color: #04AA6D;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  background-color: white;
  border: 1px solid;
  border-radius: 5px;
  color: red;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`;


export const Modal = styled.div`
display: flex;
flex-direction: column;
max-height: 225px;
max-width: 500px;
min-height: 225px;
min-width: 500px;
border: 2px solid;
position: fixed;
top: 30%;
left: 30%;
transform: translate(-30%, -30%);
background-color: white;
`;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: justify;
  align-items: center;
`;

export const PostTitle = styled.h4`
  flex: .25;
  padding: 10px;
`;

export const InputContainer = styled.div`
  flex: .75;
`;

export const PostInput = styled.input`
  font-size: 16px;
  border: 1px solid;
  width: 90%;
`;

export const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SavePostButtonContainer = styled.div`
  flex: 1;
`;

export const CancelButtonContainer = styled.div`
  flex: 1;
`;

export const SavePostButton = styled.button`
  background-color: white;
  border: 1px solid;
  border-radius: 5px;
  color: #04AA6D;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  width: 90%
`;

export const CancelPostButton = styled.button`
  background-color: white;
  border: 1px solid;
  border-radius: 5px;
  color: red;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  width: 90%
`;
