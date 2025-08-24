import { LuCalendar, LuFileText } from "react-icons/lu";
import { projects } from "./data";

import Grid from "../../components/common/grid";
import SectionTitle from "../../components/common/section-title";
import Button from "../../components/common/button/button";

import { Paragraph } from "../../components/shared";
import * as S from "./styles";

const Projects = () => (
  <S.Wrapper>
    <SectionTitle
      title="Case Studies"
      subTitle="Check out some of our awesome projects with creative ideas and great design."
    />

    <Grid columns={{ default: 3 }} gap="1.5rem">
      {projects.map((project) => (
        <S.Card key={project.id}>
          <S.Thumbnail
            alt={project.title}
            src={project.thumbnail}
            loading="lazy"
          />

          <S.Box>
            <Button style={S.title} type="link">
              {project.title}
            </Button>

            <Paragraph $size="0.9rem" style={S.description}>
              {project.description}
            </Paragraph>

            <small style={S.small}>
              <LuCalendar /> {project.date}
              <LuFileText /> {project.category}
            </small>
          </S.Box>
        </S.Card>
      ))}
    </Grid>
  </S.Wrapper>
);

export default Projects;
