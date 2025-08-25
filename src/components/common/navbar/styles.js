import styled from "@emotion/styled";

import { color, breakpoint, radius } from "../../../styles";
import { Container } from "../../shared";

export const Header = styled.header`
  width: 100%;
  height: 3.75rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: ${({ $scrolled }) =>
    $scrolled ? color.white : color.transparent};
  border-bottom: ${({ $scrolled }) => ($scrolled ? "1px solid #eee" : "none")};
  transform: translateY(${({ $show }) => ($show ? "0" : "-100%")});
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

export const Desktop = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${breakpoint.tablet} {
    padding: 0 2rem;
  }
`;

export const Logo = styled.h2`
  cursor: pointer;
  color: ${({ $scrolled }) => ($scrolled ? color.black : color.white)};
`;

export const mobileLogo = { marginBottom: "1rem", color: color.black };

export const NavLinks = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;

  a {
    text-decoration: none;
    font-weight: 400;
    color: ${({ $scrolled }) => ($scrolled ? color.black : color.white)};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${color.link};
    }
  }

  ${breakpoint.desktop} {
    display: flex;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  font-size: 1.65rem;
  cursor: pointer;
  color: ${({ $scrolled }) => ($scrolled ? color.black : color.white)};

  ${breakpoint.desktop} {
    display: none;
  }
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  height: 100%;
  width: 16rem;
  background: ${color.white};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: left 0.4s ease-in-out;
  z-index: 1100;
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  a {
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    font-size: 1rem;
    color: ${color.black};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${color.link};
    }
  }

  a:last-of-type {
    border-bottom: none;
  }
`;

export const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const button = {
  borderRadius: radius.lg,
  bottom: { marginTop: "auto" },
};
