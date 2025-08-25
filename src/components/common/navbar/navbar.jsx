import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { TbMenu } from "react-icons/tb";

import Button from "../button";
import * as S from "./styles";

const NAV_ITEMS = [
  { id: 1, path: "#home", label: "Home" },
  { id: 2, path: "#about", label: "About" },
  { id: 3, path: "#projects", label: "Projects" },
  { id: 4, path: "#blog", label: "Blog" },
  { id: 5, path: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;

      setShowHeader(currentScroll < lastScrollY || currentScroll < threshold);
      setScrolled(currentScroll > threshold);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <S.Header $show={showHeader} $scrolled={scrolled}>
        <S.Desktop>
          <S.Logo $scrolled={scrolled} onClick={handleLogoClick}>
            Klyria
          </S.Logo>

          <S.NavLinks $scrolled={scrolled}>
            {NAV_ITEMS.map(({ id, path, label }) => (
              <HashLink key={id} to={path} smooth>
                {label}
              </HashLink>
            ))}
            <Button type="primary" style={S.button}>
              Free Trial
            </Button>
          </S.NavLinks>

          <S.MenuIcon $scrolled={scrolled} onClick={() => setIsOpen(true)}>
            <TbMenu />
          </S.MenuIcon>
        </S.Desktop>
      </S.Header>

      <S.Sidebar $isOpen={isOpen}>
        <S.MobileNav>
          <S.Logo style={S.mobileLogo} onClick={handleLogoClick}>
            Klyria
          </S.Logo>

          {NAV_ITEMS.map(({ id, path, label }) => (
            <HashLink
              key={id}
              to={path}
              onClick={() => setIsOpen(false)}
              smooth
            >
              {label}
            </HashLink>
          ))}

          <Button type="primary" style={{ ...S.button, ...S.button.bottom }}>
            Free Trial
          </Button>
        </S.MobileNav>
      </S.Sidebar>

      <S.Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
