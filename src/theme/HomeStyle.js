import styled from 'styled-components';
import css from 'styled-components';

export const Image = styled.img`
  width: 20%;
`;

export const HansImage = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('${require('../images/backimg.jpg')}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: center;
  color: white;

  h2 {
    margin-bottom: 0;
  }
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    transform-origin: left;
    transform: rotateY(90deg);

    transition: transform 3s;
  }

  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
