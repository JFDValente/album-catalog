import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: #dfe4e8;
  margin-bottom: 8px;
  border: 1px solid #a1a1a1;
  max-width: 100%;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 0 3px 3px 0;
  height: 30px;
  border: none;
  border-left: 1px solid #a1a1a1;
  padding-left: 8px;
  font-size: 16px;
  max-width: 100%;
`; 

const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  flex-basis: 10%;
  padding-right: 8px;
  color: #5c5c5c;
`;

export default {
  Container,
  Input,
  Label,
};
