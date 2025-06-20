import { styled } from "@mui/material/styles";

import React from "react";


interface ContactCardProps {
  imageUrl: string;
  title: string;
  value: string[];
}

const Icon = styled("div")({
  borderRadius: "100%",
  width: 80,
  height: 80,
  backgroundColor: "#9C8351",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  "@media (max-width:1100px)": {
    width: 28,
    height: 28,
  },
  "@media (max-width:600px)": {},
});

const ContentContainer = styled("div")({
  fontSize: 26,
  letterSpacing: "1.04px",
  flex: "1 1 0",
  "@media (max-width:1100px)": {
    fontSize: 14,
    letterSpacing: "0.56px",
  },
  "@media (max-width:600px)": {},
});

const ContentGap = styled("div")({
  height: 16,

  "@media (max-width:1100px)": {
    height: 2,
  },
  "@media (max-width:600px)": {},
});

const ContactCardContainer = styled("div")({
  display: "flex",
  gap: 43,
  alignItems: "start",
  "@media (max-width:1100px)": {
    gap: 15,
  },
  "@media (max-width:600px)": {},
});


const SingleContactTxt: React.FC<ContactCardProps> = ({
  imageUrl,
  title,
  value,
}) => {
  return (
    <ContactCardContainer>
      <Icon
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer>
        <div style={{ color: "#2D2D2D" }}>{title}</div>
        <ContentGap />
        {
          value&&value.map((v,i)=><div style={{ color: "#818181"}} key={i}>{v}</div>)
        }
        
      </ContentContainer>
    </ContactCardContainer>
  );
};

export default SingleContactTxt;
