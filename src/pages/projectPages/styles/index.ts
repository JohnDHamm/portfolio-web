import styled from 'styled-components';

export const ContentWithMargins = styled.div<{ top: string; bottom: string }>`
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
`;

export const PrivacyPageContainer = styled.div`
  margin: 1rem auto 2rem auto;
  max-width: 800px;
`;
