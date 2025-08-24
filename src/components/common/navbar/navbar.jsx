import { TbMenu } from "react-icons/tb";
import { useState, useEffect } from "react";

import * as S from "./styles";
import Button from "../button";

const navItems = [
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
          <S.Logo $scrolled={scrolled}>Klyria</S.Logo>

          <S.NavLinks $scrolled={scrolled}>
            {navItems.map(({ id, path, label }) => (
              <a key={id} href={path}>
                {label}
              </a>
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
          <S.Logo style={S.mobileLogo}>Klyria</S.Logo>

          {navItems.map(({ id, path, label }) => (
            <a key={id} href={path} onClick={() => setIsOpen(false)}>
              {label}
            </a>
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
