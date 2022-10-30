import styled from "styled-components";

export const ReminderButton = styled.span`
  width: 100%;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary};
  padding: 1px 2px;

  color: white;
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;
