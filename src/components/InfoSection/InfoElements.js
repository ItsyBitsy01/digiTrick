import styled from "styled-components";
export const InfoContainer = styled.div`
  color: #fff;
   background: ${({lightBg}) => (lightBg ? "#fff" : "#163057")};
  display: flex;
  margin-top: -20px;
  margin-bottom: 50px;
 
  @media screen and (max-width: 768px) {
    padding: 50px 0;
   
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;


export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas:
    ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
     
     
  }
 
`;

export const Column1 = styled.div` 
  margin-bottom: 15px;
  padding: 0 40px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 1px;
  padding: 0 9px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width:900px;
  padding-top: 0;
  padding-bottom: 40px;
`;

export const TopLine = styled.p`
color: ${({ lightText }) => (lightText ? "#f7f8fa" : "black")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  
  font-family: 'Encode Sans Expanded', sans-serif;
 
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }  `;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start; 
`;
export const ImgWrap = styled.div`
  max-width: 665px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  height: 520px;
  margin: 0 0 0px 0;
 
  border-radius:10px;
  @media screen and (max-width: 768px) {
  height: 300px;
  }
`;
