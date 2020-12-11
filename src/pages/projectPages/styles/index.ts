import styled from 'styled-components';

export const ContentWithMargins = styled.div<{ top: string; bottom: string }>`
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
`;
