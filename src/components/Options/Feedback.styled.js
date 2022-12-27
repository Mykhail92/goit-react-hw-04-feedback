import styled from 'styled-components';

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  transition: all, 2s;
  &:hover {
    background-color: blue;
    color: #fff;
    border-radius: 10px;
  }
`;
