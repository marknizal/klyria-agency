import styled from "@emotion/styled";
import { Container } from "../../components/shared";

export const Wrapper = styled(Container)`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 4rem 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  pointer-events: none;
  transition: all 0.25s ease-in-out;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  flex: 1;
`;

export const title = {
  fontSize: "1.25rem",
  fontWeight: "600",
  height: "auto",
  padding: "0",
  justifyContent: "start",
};

export const description = {
  lineHeight: "1.25rem",
  marginBottom: "1.5rem",
  color: "gray",
};

export const small = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "auto",
};
