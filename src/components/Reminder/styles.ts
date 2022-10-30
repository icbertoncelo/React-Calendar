import styled from "styled-components";

export const ReminderButton = styled.span`
  width: 32px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary};
  padding: 2px;

  color: white;
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
