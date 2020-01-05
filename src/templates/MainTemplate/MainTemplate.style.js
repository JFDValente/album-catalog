import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 70%;
  margin: 32px auto;
  background-color: #f2f4f5
`;

const Content = styled.div`
  flex: 1;
  padding: 16px 0;
`;

const Title = styled.h1`
  margin: 16px 32px;
  text-align: center;
`;

export default {
  Container,
  Content,
  Title,
};
