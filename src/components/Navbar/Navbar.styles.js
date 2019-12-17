import styled from 'styled-components';

export const NavWrapper = styled.div`
  height: 56px;
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => (props.transparent ? 'transparent' : '#d441cd')};
  height: 56px;
  width: 100%;
  transition: all 0.2s ease-in;
  &::after {
    margin-top: 100px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* display: none; */
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: ${props => (props.active ? 'block' : 'unset')};
  opacity: ${props => (props.active ? 1 : 0)};

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
`;

export const Logo = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const Menu = styled.div`
  width: 100%;
  max-width: 250px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background: white;
  transition: transform 0.3s ease-in-out;
  transform: ${props =>
    props.opened ? 'translateX(0)' : 'translateX(-250px)'};

  ul {
    list-style: none;
    padding: 0;
    margin: 0 1rem;
  }

  @media screen and (min-width: 800px) {
    background: none;
    transform: translateX(0);
    position: relative;
    height: auto;

    ul {
      display: flex;
      flex-direction: row;
      // border: 1px solid black;
      justify-content: flex-end;
    }
  }
`;

export const MenuLink = styled.li`
  padding-top: 1.8rem;
  padding-bottom: 1.4rem;
  padding-left: 12px;
  border-bottom: 0.1px solid lightgrey;

  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;

    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    padding: 0 12px;
    border: none;

    a {
      color: white;
    }
  }
`;
