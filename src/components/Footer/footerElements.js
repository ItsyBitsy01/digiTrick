import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color:#bbd3ef;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

`;

export const SocialIconLink = styled.a`
  color:#052257;
  font-size: 24px;
  margin: 0 1rem;
  
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled.a`
  color: #052257;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const FooterText = styled.p`
  color:#052257;
  margin-top: 1rem;
  font-size: 14px;
`;
