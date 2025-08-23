import * as S from "./styles";

const SectionTitle = ({
  title = "Title",
  subTitle = "Description",
  $align,
}) => {
  return (
    <S.Wrapper $align={$align}>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Wrapper>
  );
};

export default SectionTitle;
