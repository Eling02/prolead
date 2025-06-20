import Image from "next/image";
import { GetStaticProps } from "next";
import deskTopIMG from "../../public/image/banner/join-us/dt.webp";
import mbIMG from "../../public/image/banner/join-us/mb.webp";

import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import MainFooter, { FooterTranslations } from "@/component/MainFooter";
import Navbar from "@/component/Navbar";

const SubTitleContainer = styled("div")({
  color: "#525252",
  fontSize: 30,
  fontWeight: 500,
  letterSpacing: "1.8px",
  marginBottom: 49,
  // 65
  "@media (max-width:1100px)": {
    fontSize: 14,
    letterSpacing: "0.84px",
    marginBottom: 14,
  },
});

const SubDescContainer = styled("div")({
  color: "#525252",
  fontSize: 45,
  fontWeight: 500,
  letterSpacing: "2.7px",
  "@media (max-width:1100px)": {
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: "1.2px",
  },
  "@media (max-width:600px)": {},
});

// ---

const PaddingContainer = styled("div")({
  width: "100%",
  maxWidth: 1607 - 20, // Corrected maxWidth for clarity
  padding: "0 50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  "@media (max-width:1100px)": {},
  "@media (max-width:600px)": {
    padding: "0 20px",
  },
});

const TopContainer = styled("div")({
  padding: "41px 0 33px 0",
  width: "100%",
  marginBottom: 9,
  background: "rgba(255, 253, 248, 0.94)",
  boxShadow: "0px 4px 23.1px -9px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(7.25px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width:1110px)": {
    padding: "8px 0 18px 0",
    marginBottom: 2,
  },
});

const BottomContainer = styled("div")({
  width: "100%",
  background: "rgba(255, 253, 248, 0.94)",
  boxShadow: "0px 4px 23.1px -9px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(7.25px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxHeight: 486,
  height: "45%",

  "@media (max-width:1110px)": {
    padding: 0,
  },
});

const TitleTxt = styled("div")({
  fontSize: 46,
  fontWeight: 500,
  letterSpacing: "2.76px",
  background: "linear-gradient(86deg, #B3801A 3.56%, #C4B274 93.64%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  textShadow: "none",
  width: 295,
  height: 101,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // marginBottom: 17,
  "@media (max-width:1100px)": {
    fontSize: 22,
    width: 147,
    height: 37,
    marginBottom: 6,
  },
  "@media (max-width:600px)": {},
});

const DescTxt = styled("div")({
  color: "#525252",
  fontSize: 21,
  fontWeight: 500,
  letterSpacing: "1.26px",
  boxSizing: "border-box",
  padding: "0 8%",
  textAlign: "center",
  "@media (max-width:1100px)": {
    fontSize: 8,
    letterSpacing: "0.48px",
    padding: "0 2%",
  },
  "@media (max-width:600px)": {},
});

type JoinUs = {
  title: string;
  desc: string;
  info: string;
  email: string;
};
export type Translations = {
  title: string;
  joinUs: JoinUs;
  menu: FooterTranslations;
};

type IndexProps = {
  translations: Translations;
};

export default function Index({ translations }: IndexProps) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Navbar footerTranslations={translations.menu} />
      <div style={{ width: "100vw", position: "relative" }}>
        <Image
          src={isMobile ? mbIMG : deskTopIMG}
          alt=""
          layout="responsive"
          loading="eager"
          sizes="100vw"
          width={1440}
          height={10}
          quality={100}
          priority
          style={{
            position: "relative",
            userSelect: "none",
            pointerEvents: "none",
            marginBottom: -6,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PaddingContainer>
            <TopContainer>
              <TitleTxt>{translations.joinUs.title}</TitleTxt>
              <DescTxt>{translations.joinUs.desc}</DescTxt>
            </TopContainer>

            <BottomContainer>
              <SubTitleContainer>{translations.joinUs.info}</SubTitleContainer>
              <SubDescContainer> {translations.joinUs.email}</SubDescContainer>
            </BottomContainer>
          </PaddingContainer>
        </div>
      </div>
      <MainFooter footerTranslations={translations.menu} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // Dynamic import with webpack magic comment to include only the specified JSON files
  const translations = await import(`../../public/locales/${locale}.json`);

  return {
    props: {
      translations: translations.default,
    },
  };
};
