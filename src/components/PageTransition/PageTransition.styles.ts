import styled from 'styled-components';

export const Container = styled.div<{
  width: number;
  height: number;
  color: string;
}>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  padding: 0 12px;
  background-color: ${(props) => props.color};
  transform: skewX(-15deg);
`;

export const ThickLine = styled.div<{ height: number }>`
  height: ${(props) => props.height + 'px'};
  width: 40px;
  background-color: white;
`;

export const ThinLine = styled.div<{ height: number }>`
  height: ${(props) => props.height + 'px'};
  width: 10px;
  background-color: white;
  margin-left: 12px;
`;
