import styled from 'styled-components';

export const Hamburger = styled.button`
  border: none;
  background: transparent;
  width: 44px;
  height: 44px;
  display: inline-block;
  margin-left: auto;
  z-index: 1000;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const HamburgerBars = styled.div`
  height: 70%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Bar = styled.div`
  width: 30px;
  height: 4px;
  background-color: white;
`;
