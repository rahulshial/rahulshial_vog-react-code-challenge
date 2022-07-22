import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavbarContainer = styled.nav`
  background-color: #04AA6D;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 2rem;
  padding: 0 1rem;
  height: 50px;
  align-items: center;
  font-size: 20px;
`;

export const LinkItem = styled(Link)`
 &:hover {background-color: #777;}
 text-decoration: none;
 color: white;
`;