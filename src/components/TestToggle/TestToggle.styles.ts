import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 100px;
  position: relative;
  background-color: #000;
`;

export const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  width: 60px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;
