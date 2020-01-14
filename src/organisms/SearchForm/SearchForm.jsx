import React from 'react';
import {
  func,
} from 'prop-types';

import InputField from '../../atoms/InputField';

import Style from './SearchForm.style';

import catalog from '../../data';

function SearchForm({ handleResult }) {

  const teste = ({ target }) => {
    event.preventDefault();
    console.log(target.search.value);
    handleResult(catalog);
  }  

  return (
    <Style.Container onSubmit={teste}>
        <InputField 
          name="search" 
          label="Pesquisa" 
          placeholder="Palavras chave de pesquisa"
          required
        />
        <Style.ButtonContainer>
          <Style.SearchButton>Buscar</Style.SearchButton>
        </Style.ButtonContainer>
    </Style.Container>
  );
}

SearchForm.propTypes = {
  handleResult: func,
};
    
SearchForm.defaultProps = {
  handleResult: () => {},
};

export default SearchForm;