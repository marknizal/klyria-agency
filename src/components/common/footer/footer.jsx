import { links } from "./links";

import { Button, Input } from "antd";
import * as S from "./styles";

const Footer = () => (
  <S.Wrapper role="contentinfo">
    <S.Container>
      <S.Box aria-label="Company Information">
        <h2>Klyria Agency</h2>
        <small>&copy; 2025 Mark John Allen Nizal. All rights reserved.</small>
      </S.Box>

      <S.Box aria-label="Contact Information">
        <h3>Get in touch</h3>

        <S.Address style={{ fontStyle: "normal" }}>
          <small>Moonshine St. 14/05 Light City, London, UK</small>
          <S.Link href="mailto:info@email.com">info@email.com</S.Link>
          <S.Link href="tel:+441234567890">00 (123) 456 78 90</S.Link>
        </S.Address>
      </S.Box>

      <S.Box aria-label="Learn More">
        <h3>Learn More</h3>
        <S.List>
          {links.map((link) => (
            <li key={link.id}>
              <S.Link href={`/${link.id}`}>{link.label}</S.Link>
            </li>
          ))}
        </S.List>
      </S.Box>

      <S.Box aria-label="Newsletter Signup">
        <h3>Our Newsletter</h3>
        <small>
          Subscribe to our newsletter to get our news & deals delivered to you.
        </small>

        <form aria-label="Subscribe to newsletter" style={S.form}>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            aria-label="Email Address"
            autoComplete="email"
          />
          <Button type="primary" htmlType="submit">
            Join
          </Button>
        </form>
      </S.Box>
    </S.Container>
  </S.Wrapper>
);

export default Footer;
