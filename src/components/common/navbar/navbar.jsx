import styled from "@emotion/styled";
import { color, breakpoint } from "../../../styles";

import Button from "../button";
import { Container } from "../../shared";
import { TbMenu } from "react-icons/tb";

const Header = styled.header`
  width: 100%;
  height: 3.5rem;
  position: fixed;
  display: flex;
  background-color: ${color.white};
  z-index: 1000;
  box-shadow: rgba(99, 99, 99, 0.09) 0px 2px 8px 0px;
`;

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoint.tablet} {
    padding: 0 2rem;
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 2rem;
    display: none;

    ${breakpoint.desktop} {
      display: flex;
    }
  }

  .menu {
    display: flex;
    font-size: 1.65rem;

    ${breakpoint.desktop} {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    font-weight: 400;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${color.link};
    }
  }
`;

const btn = {
  fontSize: "0.8rem",
  padding: "1rem 1.15rem",
  borderRadius: "2rem",
};

const Navbar = () => {
  return (
    <Header>
      <Wrapper>
        <h2>Klyria</h2>

        <div className="navigation">
          <Nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </Nav>

          <Button type="primary" style={btn}>
            Free Trial
          </Button>
        </div>

        <TbMenu className="menu" />
      </Wrapper>
    </Header>
  );
};

export default Navbar;
