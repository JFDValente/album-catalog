import React from 'react';
import {
  arrayOf,
  shape,
} from 'prop-types';

import Album from './../../molecules/Album';
import Style from './AlbumList.style';

function AlbumList({ catalog }) {
  return (
    <Style.Container>
      {
        catalog.map((album, index)=> (
          <Album key={`album-${index}`} album={album}/>
        ))
      }
      <button>INCREMENT</button>
    </Style.Container>
  );
}

Album.propTypes = {
  catalog: arrayOf(shape()),
};
    
Album.defaultProps = {
  catalog: [],
};
export default AlbumList;