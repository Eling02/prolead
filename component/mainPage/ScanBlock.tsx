import { styled } from "@mui/material/styles";
import wechatQR from "../../public/image/banner/home/scan/Wechat.png";
import whatsAPPQR from "../../public/image/banner/home/scan/Whatsapp.jpg";
import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Container = styled("div")({
  width: "100%",
  maxWidth: 1607 - 20,
  boxSizing: "border-box",
  padding: "41px 20px 107px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "0px 4px 23.1px -9px rgba(0, 0, 0, 0.25)",
  "@media (max-width:1100px)": {
    padding: "19px 20px 49px 20px",
  },
  "@media (max-width:600px)": {},
});

const ScanQrCodeContainer = styled("div")({
  display: "flex",
  maxWidth: 939,
  width: "100%",
  "@media (max-width:1100px)": {
    maxWidth: 274,
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
  marginBottom: 32,
  fontSize: 28,
  letterSpacing: "1.12px",
  color: "#525252",
  "@media (max-width:1100px)": {
    fontSize: 12,
    letterSpacing: "0.48px",
    marginBottom: 16,
  },
  "@media (max-width:600px)": {},
});

const SunTitleContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 11,
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
type ScanBlockrops = {
  title: string;
};
const ScanBlock: React.FC<ScanBlockrops> = ({ title }) => {

  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>

      <ScanQrCodeContainer>
        <Card
          title={"WhatsApp"}
          subtitle={"+825 6159 7828"}
          imageUrl={whatsAPPQR.src}
        />
        <div style={{ flex: "1 1 0", minWidth: 20 }}></div>
        <Card title={"WeChat"} subtitle={""} imageUrl={wechatQR.src} />
      </ScanQrCodeContainer>
    </Container>
  );
};

export default ScanBlock;
