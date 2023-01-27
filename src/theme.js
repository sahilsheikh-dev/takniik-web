import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FAFCFF",
  text: "#0A0A0D",
  textSecondary: "#7E7E85",
  bgSecondary: "#F5F5F5",
};

export const darkTheme = {
  body: "#0A0A0D",
  text: "#F9F7F7",
  textSecondary: "#7E7E85",
  bgSecondary: "#181A1C",
};

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-y: scroll;
    overflow-x: scroll;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Montserrat, 'Poppins', BlinkMacSystemFont, Helvetica, sans-serif;
    transition: all 0.25s linear;
    scroll-behavior: smooth;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  `;

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
`;

export const NavBtn = styled.button`
  background: linear-gradient(
        ${({ theme }) => theme.body},
        ${({ theme }) => theme.body}
      )
      padding-box,
    linear-gradient(101.58deg, #ff55f1 8.5%, #7300ff 91.5%) border-box;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7.14477px;
  color: ${({ theme }) => theme.text};
  // color: #fafcff !important;
`;

export const ContactSpanNumber = styled.span`
  color: ${({ theme }) => theme.text};
`;

export const ContactInputNumber = styled.input`
  width: 100%;
  padding: 15px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  // color: #fafcff !important;
`;

export const ContactSelect = styled.select`
  width: 100%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7.14477px;
  // color: ${({ theme }) => theme.text};
  color: #fafcff !important;
`;

export const ContactOptions = styled.option`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7.14477px;
  // color: ${({ theme }) => theme.text};
  color: #fafcff !important;
`;

export const TeamCard = styled.div`
  margin: 20px auto !important;
  background: ${({ theme }) => theme.bgSecondary};
  border-radius: 10px;
`;
