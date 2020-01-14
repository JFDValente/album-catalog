import React from 'react';

import MainTemplate from '../../templates/MainTemplate';

import AlbumForm from '../../organisms/AlbumForm';

function Create() {
  return (
    <MainTemplate title="Novo Disco">
      <AlbumForm />
    </MainTemplate>
  );
}

export default Create;