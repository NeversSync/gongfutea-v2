import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/img/puer-tea-table.png';
import { Copy, Title } from '../styles/utils.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: white;
  line-height: 30px;
  background: url(${backgroundImg});
  background-size: cover;
  background-repeat: repeat;

  @media (min-width: 1050px) {
    background-repeat: no-repeat;
    height: 93.75vh;
	}
`;

const Header = styled.div`
display: flex;
flex-direction: column;
align-self: center;
text-align: center;
width: 80%;
height: 27%;
font-size: .75em;

@media (min-width: 1050px) {
  font-size: .85em;
}
`;

const AboutTitle = styled.h2`
  text-align: center;
  font-size: 1.5em;

  @media (min-width: 1050px) {
    padding: 20px;
  }
`;

const AboutText = Copy.extend`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  color: white;
  line-height: 2em;
`;

const Line = styled.hr`
  width 80%;
  color: white;
  margin-bottom: 30px;
`;

export default function About() {
  return (
    <Wrapper>
      <Header>
        <AboutTitle>About</AboutTitle>
        <h3>A resource for individuals interested in the culture and practice of tea through the methodology of Gong Fu Cha 功夫茶; Good tea and lifestyle through practice.</h3>
      </Header>
      <Line/>
      <AboutText>
        <p>
          This website is an extension of the <a href="https://www.facebook.com/groups/gongfucha/">Gong Fu Cha Facebook group,</a> an international social network of tea enthusiasts. The purpose of this website is to celebrate, spread, develop, and illuminate the rich culture and activity that is <a href="http://verdanttea.com/modern-gongfu/" target="_blank">Gong Fu Cha 功夫茶</a>. We provide a way to find tea shops, tea houses, tea events, and other points of interests through a user generated <a id="tea-map-link" href="/" />>tea map.We also facilitate finding information on the what, where, why, when, and how of Gong Fu Cha for people both new and experienced.
          <p>
          We are just getting started here. In the future, we will add; a blog, a photo gallery, a list of online tea vendors complete with reviews, a list of tea blogs, a database of tasting notes, and more.
          We founded the Gong Fu Cha social network to facilitate easy access to quality tea experiences, tea companies, tea ware, tea blogs, and tea itself. Our users build this resource; all reviews and locations are user-generated, not automatically pulled from any outside sites. Please, look around and jump in.
          </p>
        </p>
      </AboutText>
    </Wrapper>
  );
}