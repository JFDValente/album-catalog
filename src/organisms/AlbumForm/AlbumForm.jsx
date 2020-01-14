import React from 'react';
import {
  number,
  string,
  arrayOf,
  shape,
} from 'prop-types';

import InputField from '../../atoms/InputField';

import Style from './AlbumForm.style';

import catalog from '../../data';

function AlbumForm({ album }) {

  const teste = ({ target }) => {
    event.preventDefault();

    const defaultThumbnail = 'https://i.pinimg.com/originals/26/c4/16/26c4162d41218d7d89bb04f480b3add7.png';
    const thumbnail = target.thumbnail.value ? target.thumbnail.value : defaultThumbnail;
    
    const albumData = {
      title: target.title.value,
      released: Number(target.released.value),
      country: target.country.value,
      genre: target.genre.value,
      style: target.style.value,
      thumbnail: thumbnail,
      artists: ['Djavan'],
      trackList: ['Flor de Lís', 'Na Boca Do Beco', 'Maçã Do Rosto', 'Para-Raio', 'E Que Deus Ajude', 'Quantas Voltas Dá Meu Mundo', 'Maria Das Mercedes', 'Muito Obrigado', 'Embola Bola', 'Fato Consumado', 'Magia', 'Ventos Do Norte'],
    }
    
    const isEditMode = !!album.id;
    
    if (isEditMode) {
      console.log(album.id);
      catalog.splice(catalog.indexOf(album.id), 1 );
      catalog.push(albumData);
      return
    }

    catalog.push(albumData);
    
  }

  const released = album.released ? album.released.toString() : null;

  return (
    <Style.Container onSubmit={teste}>
        <InputField 
          name="title" 
          label="Título" 
          value={album.title}
          placeholder="The greatest hits"
          required
        />
        <InputField 
          type="number"
          name="released" 
          label="Ano" 
          value={released}
          placeholder="2020"
          required
        />
        <InputField 
          name="country" 
          label="País" 
          value={album.country}
          placeholder="USA"
          required
        />
        <InputField 
          name="genre" 
          label="Gênero" 
          value={album.genre}
          placeholder="Rock"
          required
        />
        <InputField 
          name="style" 
          label="Estilo" 
          value={album.style}
          placeholder="Black Metal"
          required
        />
        <InputField 
          name="thumbnail" 
          label="Capa" 
          value={album.thumbnail}
          placeholder="URL da imagem da capa do disco"
        />
        <Style.ButtonContainer>
          <Style.SaveButton>Salvar</Style.SaveButton>
        </Style.ButtonContainer>
    </Style.Container>
  );
}

AlbumForm.propTypes = {
  album: shape({
    id: number,
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
    
AlbumForm.defaultProps = {
  album: {
    id: null,
    title: '',
    thumbnail: '',
    artists: [],
    released: null,
    country: '',
    genre: '',
    style: '',
    trackList: [],
  },
};

export default AlbumForm;