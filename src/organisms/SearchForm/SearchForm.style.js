import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 16px 16px;
  margin: 0 32px 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 16px;
`;

const SearchButton = styled.button`
  border-radius: 50px;
  border: none;
  background-color: #3e799e;
  height: 40px;
  width: 90px;

  cursor: pointer;

  font-size: 16px;
  color: #FFFFFF;

  &:hover { 
    background-color: #4993d1;
  }
`;

export default {
  Container,
  ButtonContainer,
  SearchButton,
};
