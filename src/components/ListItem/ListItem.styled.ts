import styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = styled(Link)<{ $isDone: boolean }>`
  text-decoration: none;
  padding: 10px;
  display: block;
  color: ${props => props.$isDone ? 'green' : 'red'};
  border: 1px solid ${props => props.$isDone ? 'green' : 'red'};
  border-radius: 4px;
  margin-bottom: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$isDone ? '#f0fff0' : '#fff0f0'};
    transform: translateY(-1px);
  }
`;