import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 20px;
  background-color: rgba(11, 156, 49, 0.6);
  outline: none;
  border: 1px solid #555;
  color: #fff;
  transition: all ease-in-out 0.3s;

  &:hover {
    background-color: rgba(11, 156, 49, 0.4);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 50px 30px
  }
`;

export const ErrorMessage = styled.h2`
  padding: 30px 60px;
  background-color: rgba(242, 38, 19, 0.3);
  border: 1px solid red;
`;
