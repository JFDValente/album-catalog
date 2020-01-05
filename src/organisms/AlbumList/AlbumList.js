import React from "react";

import Style from './AlbumList.style';

import catalog from '../../data';

function List() {
  return (
    <Style.Container>
      {
        catalog.map(album => (
          <Style.AlbumContainer key={`album-${album.id}`}>
            <Style.Title>{album.title}</Style.Title>
            <Style.InfoAlbumContainer>
              <Style.Thumbnail src={album.thumbnail} alt="thumbnail"/>
              <Style.DetailsContainer>
                <Style.InfoDetails>{`Artista: ${album.artists.join(', ')}`}</Style.InfoDetails>
                <Style.InfoDetails>{`Lançamento: ${album.released}`}</Style.InfoDetails>
                <Style.InfoDetails>{`País: ${album.country}`}</Style.InfoDetails>
                <Style.InfoDetails>{`Gênero: ${album.genre}`}</Style.InfoDetails>
                <Style.InfoDetails>{`Estilo: ${album.style}`}</Style.InfoDetails>
              </Style.DetailsContainer>
            </Style.InfoAlbumContainer>
            <Style.TrackList>
              <Style.TrackListTitle>Faixas</Style.TrackListTitle>
              {album.trackList.join(' || ')}
            </Style.TrackList>
          </Style.AlbumContainer>
        ))
      }
    </Style.Container>
  );
}

export default List;