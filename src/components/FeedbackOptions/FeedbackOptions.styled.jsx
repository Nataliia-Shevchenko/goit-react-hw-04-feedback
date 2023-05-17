import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const ButtonElement = styled.button`
  min-width: 90px;
  padding: 12px;
  background-color: #e49898;
  border-radius: 25px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    background-color: #ee5151;
  }
`;
