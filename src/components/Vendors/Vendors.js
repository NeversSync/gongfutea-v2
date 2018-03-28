import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/img/gongfu-setup.jpg';
import vendors from '../../data/vendors';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import VendorCard from './VendorCard';

const BackgroundImage = styled.div`
height: 30vh;
width: 100vw;
background: url(${backgroundImage});
background-size: cover;
background-repeat: no-repeat;
`;

const HeaderContainer = styled.div`
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
`;

const Title = styled.h1`
font-weight: 400;
font-size: 5em;
`;

class Vendors extends Component {
  render() {
    return (
      <div>
        <BackgroundImage>
          <HeaderContainer>
            <Title>Vendor List</Title>
          </HeaderContainer>
        </BackgroundImage>
        <List style={{ width: '75%', marginLeft: '10%' }}>
          {vendors.map(vendor => {
            return <div>
              <VendorCard vendor={vendor} />
              <Divider inset={true} />
            </div>;
          })
          };
      </List>
      </div>
    );
  }

}

export default Vendors;