import React from 'react';

import MainTemplate from '../../templates/MainTemplate';

import AlbumForm from '../../organisms/AlbumForm';

import catalog from '../../data';

function Edit() {
  return (
    <MainTemplate title="Edição do Disco">
      <AlbumForm album={catalog[0]}  />
    </MainTemplate>
  );
}

export default Edit;