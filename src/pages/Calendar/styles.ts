import styled from "styled-components";

export const CalendarContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.background};
  padding: 24px;
`;

export const ThemeButton = styled.button`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: 0;
  height: 48px;
  width: 48px;
  padding: 4px 8px;
  border-radius: 50%;

  position: absolute;
  right: 24px;
`;
