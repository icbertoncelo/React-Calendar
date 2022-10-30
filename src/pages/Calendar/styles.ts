import styled from "styled-components";

export const CalendarContainer = styled.div`
  height: 100vh;
  padding: 24px 96px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 24px;
  top: 24px;

  background: none;
  color: ${({ theme }) => theme.text};
  height: 48px;
  width: 48px;
  padding: 4px;
  border: none;

  span {
    font-size: 40px;
  }
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
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.background};
    }
  }

  span {
    color: ${({ theme }) => theme.text};
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
`;
