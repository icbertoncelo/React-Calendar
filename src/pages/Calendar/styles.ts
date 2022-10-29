import styled from "styled-components";

export const CalendarContainer = styled.div`
  height: 100vh;
  padding: 24px 96px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

export const ThemeButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;

  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  height: 48px;
  width: 48px;
  padding: 4px 8px;
  border: none;
  border-radius: 50%;
`;

export const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background: white;
  border-radius: 2px;
  background: ${({ theme }) => theme.tableBG};
`;

export const CalendarHeader = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  padding: 12px;
  background: ${({ theme }) => theme.tableBG};

  button {
    text-align: center;
    background: ${({ theme }) => theme.tableBG};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 2px;
  }
`;

export const CalendarWeekdaysHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: ${({ theme }) => theme.background};

  span {
    text-align: center;
    padding: 12px;
  }
`;

export const CalendarDaysContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: ${({ theme }) => theme.tableBG};

  button {
    text-align: center;
    padding: 2px;
    height: 64px;
    border: none;
    background: ${({ theme }) => theme.tableBG};
    color: ${({ theme }) => theme.text};

    :nth-child(4) {
      background: ${({ theme }) => theme.primary};
      color: white;
    }
  }
`;
