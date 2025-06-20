import Image from "next/image";
import { GetStaticProps } from "next";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import oneImg from "../../public/image/otherValueAddedServices/ov-1.webp";
import twoImg from "../../public/image/otherValueAddedServices/ov-2.webp";
import threeImg from "../../public/image/otherValueAddedServices/ov-3.webp";
import fourImg from "../../public/image/otherValueAddedServices/ov-4.webp";

import ServiceInfoLayout from "@/component/ServiceInfoLayout";
import { FooterTranslations } from "@/component/MainFooter";

const ImgContainer = styled("div")({
  marginTop: -10,
  marginLeft: 153,

  "@media (max-width:1300px)": { marginLeft: 50 },
  "@media (max-width:1100px)": {
    marginLeft: 0,
    width: "100%",
    marginTop: 0,
    display: "flex",
    justifyContent: "center",
    height: "auto",
  },
  "@media (max-width:600px)": {},
});
type Translations = {
  hongKongAndOffshoreCompanyRegistration: RegistrationInfo;
  comprehensiveCompanySecretarialServices: RegistrationInfo;
  otherValueAddedServices: RegistrationInfo;
  title: string;
  menu: FooterTranslations;
};

type IndexProps = {
  translations: Translations;
};

type RegistrationInfo = {
  title: string;
  desc: string;
  list: CompanyProcess[];
  extraInfo: {
    lineOne: string;
    list: Array<string>; // Adjust type based on what the list should contain
    lineEnd: string;
  };
};

type CompanyProcess = {
  title: string;
  desc: string;
  list: Array<{
    title: string;
    desc: string;
  }>;
  extraInfo: {
    lineOne: string;
    list: Array<string>; // Adjust type based on what the list should contain
    lineEnd: string;
  };
};

const SubSubSubDescTxt = styled("div")({
  color: "#2D2D2D",
  fontSize: 38,
  letterSpacing: "2.28px",
  marginBottom: 42,
  marginLeft: 35,
  "@media (max-width:1100px)": {
    fontSize: 14,
    letterSpacing: "0.84px",
    marginBottom: 14,
    marginLeft: 24,
  },
  "@media (max-width:600px)": {},
});

// otherValueAddedServices
export default function Index({ translations }: IndexProps) {
  const TXT = translations.otherValueAddedServices;
  const isMobile = useMediaQuery("(max-width:1100px)");

  const DATA_IMG = [
    {
      img: (
        <ImgContainer style={{ marginLeft: isMobile ? 0 : 177 }}>
          <Image
            src={oneImg}
            width={isMobile ? 127 : 371}
            height={isMobile ? 85 : 250}
            alt=""
          />
        </ImgContainer>
      ),
      component: <></>,
    },
    {
      img: (
        <ImgContainer style={{ marginLeft: isMobile ? 0 : 166 }}>
          <Image
            src={twoImg}
            width={isMobile ? 137 : 400}
            height={isMobile ? 78 : 226}
            alt=""
          />
        </ImgContainer>
      ),
      component: <></>,
    },
    {
      img: (
        <ImgContainer style={{ marginLeft: isMobile ? 0 : 206 }}>
          <Image
            src={threeImg}
            width={isMobile ? 107 : 314}
            height={isMobile ? 94 : 277}
            alt=""
          />
        </ImgContainer>
      ),
      component: <></>,
    },
    {
      img: (
        <ImgContainer style={{ marginLeft: isMobile ? 0 : 130 }}>
          <Image
            src={fourImg}
            width={isMobile ? 149 : 436}
            height={isMobile ? 77 : 226}
            alt=""
          />
        </ImgContainer>
      ),
      component: <></>,
    },
    {
      img: <></>,
      component: (
        <div style={{ marginTop: -30 }}>
          {TXT.list[4].extraInfo.list.map((l, i) => (
            <SubSubSubDescTxt key={i}>{l}</SubSubSubDescTxt>
          ))}
        </div>
      ),
    },
  ];
  return (
    <ServiceInfoLayout
      context={TXT}
      imgList={DATA_IMG}
      translations={translations}
    />
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
