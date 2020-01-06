import styled from 'styled-components';

const Container = styled.li`
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

const InfoContainer = styled.div`
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
  font-size: 14px;
  border-top: 1px solid #edf2f5;
  margin-top: 4px;
`; 

const TrackListTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin: 4px 0;
`;

export default {
  Container,
  Title,
  InfoContainer,
  Thumbnail,
  DetailsContainer,
  InfoDetails,
  TrackList,
  TrackListTitle,
};
