import { styled } from "@mui/material/styles";

import React from "react";


interface ContactCardProps {
  imageUrl: string;
  title: string;
  value: string;
}

export const InfoTitle = styled("div")({
    fontSize: 46,
    fontWeight: 500,
    letterSpacing: "2.76px",
    coloe:"black",
  "@media (max-width:1100px)": {

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


