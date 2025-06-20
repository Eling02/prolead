import Image from "next/image";
import { GetStaticProps } from "next";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import oneImg from "../../public/image/comprehensiveCompanySecretarialServices/ccs-1.webp";
import twoImg from "../../public/image/comprehensiveCompanySecretarialServices/ccs-2.webp";
import threeImg from "../../public/image/comprehensiveCompanySecretarialServices/ccs-3.webp";

import ServiceInfoLayout from "@/component/ServiceInfoLayout";
import { FooterTranslations } from "@/component/MainFooter";

const SubInfoTitleTxt = styled("div")({
  color: "#525252",
  fontSize: 35,
  letterSpacing: "2.1px",
  marginLeft: 28,
  marginBottom: 28,
  fontWeight: 500,
  "@media (max-width:1100px)": {
    fontSize: 14,
    letterSpacing: "0.84px",
    marginBottom: 11,
  },
  "@media (max-width:600px)": {},
});

const SubSubDescTxt = styled("div")({
  color: "#818181",
  fontSize: 30,
  letterSpacing: "1.8px",
  marginLeft: 30,
  boxSizing: "border-box",
  paddingLeft: 33,
  marginBottom: 61,
  "@media (max-width:1100px)": {
    fontSize: 12,
    letterSpacing: "0.72px",
    marginLeft: 8,
    paddingLeft: 33,
    marginBottom: 20,
  },
  "@media (max-width:600px)": {},
});

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

const TwoImgContainer = styled("div")({
  marginTop: -10,
  marginLeft: 98,
  "@media (max-width:1300px)": {},
  "@media (max-width:1100px)": {
    marginLeft: 0,
    height: "auto",
    width: "100%",
    marginTop: 0,
    display: "flex",
    justifyContent: "center",
  },
  "@media (max-width:600px)": {},
});

const ThreeImgContainer = styled("div")({
  marginTop: -10,
  marginLeft: 125,
  "@media (max-width:1300px)": {},
  "@media (max-width:1100px)": {
    height: "auto",
    marginLeft: 0,
    width: "100%",
    marginTop: 0,
    display: "flex",
    justifyContent: "center",
  },
  "@media (max-width:600px)": {},
});

export default function Index({ translations }: IndexProps) {
  const TXT = translations.comprehensiveCompanySecretarialServices;
  const isMobile = useMediaQuery("(max-width:1100px)");

  const DATA_IMG = [
    {
      img: (
        <ImgContainer>
          <Image
            src={oneImg}
            width={isMobile ? 103 : 314}
            height={isMobile ? 88 : 267}
            alt=""
          />
        </ImgContainer>
      ),
      component: (
        <div>
          <SubInfoTitleTxt style={{ color: "#818181" }}>
            {TXT.list[0].extraInfo.lineOne}
          </SubInfoTitleTxt>
          {TXT.list[0].extraInfo.list.map((l, i) => (
            <SubSubDescTxt style={{ maxWidth: 987 }}>{l}</SubSubDescTxt>
          ))}
          <SubInfoTitleTxt style={{ color: "#818181" }}>
            {TXT.list[0].extraInfo.lineEnd}
          </SubInfoTitleTxt>
        </div>
      ),
    },
    {
      img: (
        <TwoImgContainer>
          <Image
            src={twoImg}
            width={isMobile ? 121 : 369}
            height={isMobile ? 90 : 273}
            alt=""
          />
        </TwoImgContainer>
      ),
      component: <></>,
    },
    {
      img: (
        <ThreeImgContainer>
          <Image
            src={threeImg}
            width={isMobile ? 121 : 370}
            height={isMobile ? 86 : 261}
            alt=""
          />
        </ThreeImgContainer>
      ),
      component: <></>,
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
