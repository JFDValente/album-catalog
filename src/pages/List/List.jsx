import React from "react";

import MainTemplate from '../../templates/MainTemplate';

import AlbumList from '../../organisms/AlbumList';

function List() {
  return (
    <MainTemplate title="Discos">
      <AlbumList />
    </MainTemplate>
  );
}

export default List;