import React from 'react';
import {
  number,
  string,
  arrayOf,
  shape,
} from 'prop-types';

import Style from './Album.style';

function Album({ album }) {
  return (
    <Style.Container>
      <Style.Title>{album.title}</Style.Title>
      <Style.InfoContainer>
        <Style.Thumbnail src={album.thumbnail} alt="thumbnail"/>
        <Style.DetailsContainer>
        <Style.InfoDetails>{`Artista: ${album.artists.join(', ')}`}</Style.InfoDetails>
        <Style.InfoDetails>{`Lançamento: ${album.released}`}</Style.InfoDetails>
        <Style.InfoDetails>{`País: ${album.country}`}</Style.InfoDetails>
        <Style.InfoDetails>{`Gênero: ${album.genre}`}</Style.InfoDetails>
        <Style.InfoDetails>{`Estilo: ${album.style}`}</Style.InfoDetails>
        </Style.DetailsContainer>
      </Style.InfoContainer>
      <Style.TrackList>
        <Style.TrackListTitle>Faixas</Style.TrackListTitle>
        {album.trackList.join(' || ')}
      </Style.TrackList>
    </Style.Container>        
  );
}

Album.propTypes = {
  album: shape({
    title: string,
    thumbnail: string,
    artists: arrayOf(string),
    released: number,
    country: string,
    genre: string,
    style: string,
    trackList: arrayOf(string),
  })
};
    
Album.defaultProps = {
  album: shape({
    title: '',
    thumbnail: '',
    artists: [],
    released: null,
    country: '',
    genre: '',
    style: '',
    trackList: [],
  })
};

export default Album;