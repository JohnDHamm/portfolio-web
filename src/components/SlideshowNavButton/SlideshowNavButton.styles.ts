import styled from 'styled-components';

export const StyledIcon = styled.svg<{
  width: number;
}>`
  width: ${(props) => props.width + 'px'};

  &:hover {
    cursor: pointer;
  }
`;
