import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 32px;
  list-style-type: none;
  padding: 0;
`;

const AlbumContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #dfe4e8;
  padding: 16px 16px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Title = styled.h3`
  margin: 0 0 8px;
`;

const InfoAlbumContainer = styled.div`
  display: flex;
`;

const Thumbnail = styled.img`
  height: 125px;
`;

const DetailsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  list-style-type: none;
  margin: 0;
`;

const InfoDetails = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const TrackList = styled.div`
  text-align: justify;
`; 

const TrackListTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin: 4px 0;
`;

export default {
  Container,
  AlbumContainer,
  Title,
  InfoAlbumContainer,
  Thumbnail,
  DetailsContainer,
  InfoDetails,
  TrackList,
  TrackListTitle,
};
