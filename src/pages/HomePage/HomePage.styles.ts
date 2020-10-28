import styled from 'styled-components';

export const ContentContainer = styled.div`
  @media screen and (max-width: 1024px) {
    margin: 0 0.5rem;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  @media screen and (max-width: 1024px) {
    max-width: 480px;
    margin: auto;
  }
`;
