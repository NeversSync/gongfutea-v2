import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/img/tetsu2.png';
import List from '../List/List';
import Map from '../Map/Map';

const Wrapper = styled.div`
  height: 1900px;
`;

const BackgroundImage = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeaderContainer = styled.div`
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const PlacesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 5em;
`;

const SubHeader = styled.h2`
  font-size: 2em;
  font-weight: 400;
`;

class Main extends Component {
  render() {
    const { user, locations } = this.props;

    return (
      <Wrapper>
        <BackgroundImage>
          <HeaderContainer>
            <Title>GONG FU TEA</Title>
            <SubHeader>A site for tea lovers</SubHeader>
          </HeaderContainer>
        </BackgroundImage>
        <PlacesWrapper>
            <List locations={locations} />
            <Map locations={locations}/>
        </PlacesWrapper>
      </Wrapper>
    );
  }
}

export default Main;

