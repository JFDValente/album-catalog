import React, { useState } from 'react';

import MainTemplate from '../../templates/MainTemplate';

import AlbumList from '../../organisms/AlbumList';
import SearchForm from '../../organisms/SearchForm';


function Search() {
  const [searchResult, setSearchResult] = useState([]);

  const handleResult = (data) => {
    setSearchResult(data);
  }

  return (
    <MainTemplate title="Pesquisa">
      <SearchForm handleResult={handleResult}/>
      <AlbumList catalog={searchResult} />
    </MainTemplate>
  );
}

export default Search;