import styled from 'styled-components';
import { Text } from '@react-pakistan/react-commons-collection';

export const StyledInput = styled.input`
  border: 1px solid ${(props) => (props.isActive ? 'red' : 'green')};
  width: 50%;

  &:hover {
    border: 1px solid blue;
  }
`;

export const StyledLabel = styled(Text)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
