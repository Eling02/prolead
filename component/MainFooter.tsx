import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Link from "next/link";

import React from "react";

export const COMPANY = [
  {
    txt: "關於我們",
    path: "",
  },
  {
    txt: "爲何選擇臻卓？",
    path: "",
  },
];

export const COMPANY_SERVICE = [
  {
    txt: "香港及離岸公司註冊",
    path: "/hong-kong-and-offshore-company-registration",
  },
  {
    txt: "全套公司秘書服務",
    path: "/comprehensive-company-secretarial-services",
  },
  {
    txt: "註冊地址及信件代收轉遞",
    path: "/registered-address-and-mail-collection-and-forwarding",
  },
  {
    txt: "其他增值服務",
    path: "/other-value-added-services",
  },
];

export const CONTACT_US = [
  {
    txt: "Contact Information",
    path: "/contact-info",
  },
  {
    txt: "人才招募",
    path: "/join-us",
  },
];

const TitleTxt = styled("div")({
  color: "#FFF",
  fontSize: 22,
  letterSpacing: "0.88px",
  marginBottom: 51,
  "@media (max-width:1100px)": {
    fontSize: 16,
    letterSpacing: "0.64px",
    marginBottom: 16,
  },
  "@media (max-width:600px)": {},
});

const SubTxt = styled("div")({
  color: "#ADADAD",
  fontSize: 22,
  letterSpacing: "0.88px",
  marginBottom: 51,
  minWidth: 223,
  "@media (max-width:1100px)": {
    minWidth: "auto",
    fontSize: 12,
    letterSpacing: "0.48px",
    marginBottom: 10,
  },
  "@media (max-width:600px)": {},
});

const LicenseTxt = styled("div")({
  color: "#ADADAD",
  fontSize: 18,
  letterSpacing: "0.72px",
  paddingTop: 49,
  paddingBottom: 61,
  marginRight: "18%",
  alignItems: "end",
  gap: 16,
  "@media (max-width:1100px)": {
    fontSize: 8,
    letterSpacing: "0.32px",
    paddingTop: 30,
    paddingBottom: 32,
    gap: 7,
  },
  "@media (max-width:600px)": {
    alignItems: "start",
    marginLeft: 50,
  },
});

const GridContainer = styled("div")({
  color: "#FFF",
  width: "100%",
  // 340 + 91 + 606 + 91 + 91;
  maxWidth: 1250,
  display: "grid",
  gridTemplateColumns: "1fr 1.5fr 0.5fr",
  marginTop: 44,
  marginBottom: 76,
  "@media (max-width:1100px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
    // gridTemplateColumns: "1fr",
    // gap: 26,
  },
  "@media (max-width:860px)": {
    gridTemplateColumns: "1fr",
    gap: 21,
    marginTop: 46,
    marginBottom: 80,
  },
});

const PaddingContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "0px 20px 0px 60px",
  "@media (max-width:1100px)": {
    padding: "0 20px 0 50px",
  },
  "@media (max-width:600px)": {
    padding: "0 30px 0 45px",
  },
});

export type MenuItemListType = {
  txt: string;
  path: string;
};

export type MenuItemType = {
  title: string;
  list: MenuItemListType[];
};

export type FooterTranslations = {
  company: MenuItemType;
  corporateServices: MenuItemType;
  contactUs: MenuItemType;
  license: string[];
  header: MenuItemListType[];
};

export type FooterProps = {
  footerTranslations: FooterTranslations
};


const Index: React.FC<FooterProps> = ({footerTranslations}) => {
  
  return (
    <div
      style={{
        background: "#1A2636",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PaddingContainer>
        <GridContainer>
          <div>
            <TitleTxt>ProLead</TitleTxt>
            <div>
              {footerTranslations &&
                footerTranslations?.company?.list.map((c, i) => (
                  <Link
                    key={i}
                    href={c.path}
                    style={{ textDecoration: "none" }}
                  >
                    <SubTxt key={i}>{c.txt}</SubTxt>
                  </Link>
                ))}
            </div>
          </div>
          {/* ------ */}
          <div>
            <TitleTxt>
              {footerTranslations &&
                footerTranslations?.corporateServices?.title}
            </TitleTxt>
            <div>
              {footerTranslations &&
                footerTranslations?.corporateServices?.list.map((c, i) => (
                  <Link
                    key={i}
                    href={c.path}
                    style={{ textDecoration: "none" }}
                  >
                    <SubTxt key={i}>{c.txt}</SubTxt>
                  </Link>
                ))}
            </div>
          </div>

          {/* ------ */}

          <div>
            <TitleTxt>
              {footerTranslations && footerTranslations?.contactUs?.title}
            </TitleTxt>
            <div>
              {footerTranslations &&
                footerTranslations?.contactUs?.list.map((c, i) => (
                  <Link
                    href={c.path}
                    style={{ textDecoration: "none" }}
                    key={i}
                  >
                    <SubTxt key={i}>{c.txt}</SubTxt>
                  </Link>
                ))}
            </div>
          </div>
        </GridContainer>
      </PaddingContainer>
      <div
        style={{
          width: "100vw",
          borderBottom: "1px solid #DDD",
        }}
      />
      <PaddingContainer>
        <LicenseTxt
          style={{
            display: "flex",
            flexDirection: "column",

            color: "#FFF",
            width: "100%",

            // 340 + 91 + 606 + 91 + 91;
            maxWidth: 1250,
          }}
        >
          {footerTranslations &&
            footerTranslations?.license.map((l, i) => <div key={i}>{l}</div>)}
        </LicenseTxt>
      </PaddingContainer>
    </div>
  );
}

export default Index;