import React from 'react';

import MainTemplate from '../../templates/MainTemplate';

import AlbumList from '../../organisms/AlbumList';

import catalog from '../../data';

function List() {
  return (
    <MainTemplate title="Discos">
      <AlbumList catalog={catalog} />
    </MainTemplate>
  );
}

export default List;