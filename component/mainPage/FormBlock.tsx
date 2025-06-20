import { styled } from "@mui/material/styles";
import React from "react";
import ProLeadFormTable, { ProLeadFormTableProp } from "./Form";


interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Container = styled("div")({
  width: "100%",
  maxWidth: 1607 - 20,
  boxSizing: "border-box",
  padding: "0px 0px 83px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "0px 4px 23.1px -9px rgba(0, 0, 0, 0.25)",
  "@media (max-width:1100px)": {
    padding: "0px 0px 31px 0px",
  },
  "@media (max-width:600px)": {},
});

const CardContainer = styled("div")({
  borderRadius: 37,
  width: 342,
  height: 451,
  background: "#FAFAFA",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "@media (max-width:1100px)": {
    borderRadius: 10,
    width: 118,
    height: 168,
  },
  "@media (max-width:600px)": {},
});

const QRCodeContainer = styled("div")({
  width: 252,
  height: 257,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  margin: 33,
  "@media (max-width:1100px)": {
    width: 90,
    height: 91,
    margin: 9,
  },
  "@media (max-width:600px)": {},
});

const TitleContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 37,
  paddingBottom:42,
  "@media (max-width:1100px)": {
  paddingTop: 15,
  paddingBottom:18,
  },
  "@media (max-width:600px)": {},
});
const Title = styled("div")({
 fontSize: 46,
          fontWeight: 500,
          letterSpacing: "2.76px",
          background: "linear-gradient(86deg, #B3801A 3.56%, #C4B274 93.64%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          textShadow: "none",
          width: "100%",
          minHeight: 57,
  "@media (max-width:1100px)": {
    fontSize: 20,
    letterSpacing: "1.2px",
              minHeight: 25
  },
  "@media (max-width:600px)": {},
});
    

const SunTitleContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 32,
  fontSize: 28,
  letterSpacing: "1.12px",
  color: "#525252",
  "@media (max-width:1100px)": {
    fontSize: 12,
    letterSpacing: "0.48px",
    marginBottom: 3,
  },
  "@media (max-width:600px)": {},
});

const DescContainer = styled("div")({
  fontSize: 14,
  letterSpacing: "0.56px",
  color: "#818181",
  "@media (max-width:1100px)": {
    fontSize: 10,
    letterSpacing: "0.4px",
  },
  "@media (max-width:600px)": {},
});

const Card: React.FC<CardProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <CardContainer>
      <QRCodeContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <SunTitleContainer>{title}</SunTitleContainer>
      <DescContainer>{subtitle}</DescContainer>
    </CardContainer>
  );
};


const FormBlock: React.FC<ProLeadFormTableProp> = ({content,corporateServices}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          {content.title}
        </Title> 
        </TitleContainer>
      <div
        style={{ width: "100%", height: 2, backgroundColor: "#DADADA" }}
      ></div>
      <ProLeadFormTable content={content} corporateServices={corporateServices} />
    </Container>
  );
};

export default FormBlock;
