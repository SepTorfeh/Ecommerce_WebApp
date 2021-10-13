import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImSearch, ImCart } from "react-icons/im";

export const Nav = styled.nav`
  background: #fff;
  height: auto;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1001;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-family: cursive;
`;

export const NavIcon = styled.img`
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 40%;
    margin-left: 130px;
  }
`;

export const HamBurgerIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  text-align: center;
  min-width: 800px;
  @media screen and (max-width: 960px) {
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 100%;
    position: absolute;
    top: 70px;
    left: ${({ click }) => (click ? "-50%" : "-215%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
export const SubMenu = styled.ul`
  pointer-events: none;
  position: absolute;
  z-index: 998;
  opacity: 0;
  float: left;
  min-width: 10rem;
  padding: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  transform: translateY(20%);
  transition: all 0.4s ease-in;
  :hover {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0%);
  }
`
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
`
export const NavLinks = styled(Link)`
  color: ${({ active }) => (active ? "#4b59f7" : "#000")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  :hover {
    color: #4b59f7;
  }
  :hover + ${SubMenu} {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0%);
  
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    display: table;
  }
`
export const NavSearch = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const SearchIcon = styled(ImSearch)`
  margin-top: 27px;
  font-size: 25px;
`
export const SearchInput = styled.input`
  margin-top: 22px;
  width: 100px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 15px;
  font-size: 14px;
  padding: 6px 12px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  :focus,
  :active {
    outline: none;
    width: 300px;
  }
`
export const CartIcon = styled(ImCart)`
  margin-top: 7px;
  font-size: 25px;
  position: relative;
`
export const SubItem = styled.li`
  :hover {
    background-color: #4b59f7;
    ${NavLinks} {
      color: #fff;
    }
  }
`
export const CartCircle = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #4b59f7;
  border-radius: 50%;
  margin-top: -27px;
  margin-left: 27px;
  color: #fff;
  font-size: 9px;
`
export const loginButton = styled.button`

`
