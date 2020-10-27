import styled from 'styled-components';

export const DesktopContainer = styled.div`
  display: block;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: block;
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
