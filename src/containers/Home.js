import React, { Component, PropTypes } from 'react';
import {Container} from '../theme/grid';
import {
  Image,
  HansImage,
  RevealP
} from '../theme/HomeStyle';

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <HansImage>
          <h2>Hansi Wang</h2>
          {/* <Image src={require('../images/Photo.png')} alt="Hans"/> */}
          <h3>Front-end Developer - Aim to DevOps Engineer</h3>
        </HansImage>
            <RevealP>I graduated from Unitec major in software development. I love coding and keen to be a front-end developer. In the past two years, I have learned several web programming languages (like JavaScript, C#, Asp.net, PHP, etc.), front-end technologies (like HTML&HTML5, CSS, React JS, Angular JS 2, etc.), back-end technologies (like Nodejs, PHP, MySQL, MongoDB, etc.), as well as various frameworks (like Bootstrap, jQuery, SASS, Font-awesome, CakePHP, etc.), participated or achieved some projects. My aim to become DevOps engineer in the next few years, fascinating in Cloud platform and Open Stack.</RevealP>
            <br/>
            <RevealP>Meanwhile, I have 6.5 years working experience, relating to system maintenance, IT level 1 and level 2 support, HR & Finance enterprise process, customer services and team management. Both in IBM (for 1.5 years) and HP (5 years) with a focus in the Japanese, Asia and the Pacific area. I have also been acting as a team leader backup, team leader and system engineer in my career. My language strengths are English, Japanese, Mandarin and the corresponding business culture etiquette within said languages. Teamwork and self-learning are my forte. I take pride in my excellent interpersonal skills. I am eager to be challenged and would like to improve my communication and professional IT skills gained through experiences in the IT sector.</RevealP>
      </Container>
    );
  }
}
