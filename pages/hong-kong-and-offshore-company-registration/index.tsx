import Image from "next/image";
import { GetStaticProps } from "next";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import ServiceInfoLayout from "@/component/ServiceInfoLayout";

import oneImg from "../../public/image/register/one_flow.png";
import twoImg from "../../public/image/register/two_type.png";
import threeImg from "../../public/image/register/three_require.png";
import { FooterTranslations } from "@/component/MainFooter";

const ImgContainer = styled("div")({
  height: 254,
  width: 398,
  marginTop: -10,
  marginLeft: 109,

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

type RegistrationInfo = {
  title: string;
  desc: string;
  list: CompanyProcess[];
};

type Translations = {
  hongKongAndOffshoreCompanyRegistration: RegistrationInfo;
  title: string;
  menu: FooterTranslations;
};

type IndexProps = {
  translations: Translations;
};

type CompanyProcess = {
  title: string;
  desc: string;
  list: Array<{
    title: string;
    desc: string;
  }>;
};

const TwoImgContainer = styled("div")({
  height: 238,
  width: 337,
  marginTop: -10,
  marginLeft: 132,
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
  height: 282,
  width: 473,
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
  const TXT = translations.hongKongAndOffshoreCompanyRegistration;
  const isMobile = useMediaQuery("(max-width:1100px)");
  const DATA_IMG = [
    {
      img: (
        <ImgContainer>
          <Image
            src={oneImg}
            width={isMobile ? 136 : 398}
            height={isMobile ? 86 : 254}
            alt=""
          />
        </ImgContainer>
      ),
      component: <></>,
    },
    {
      img: (
        <TwoImgContainer>
          <Image
            src={twoImg}
            width={isMobile ? 129 : 337}
            height={isMobile ? 91 : 238}
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
            width={isMobile ? 168 : 473}
            height={isMobile ? 100 : 282}
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
