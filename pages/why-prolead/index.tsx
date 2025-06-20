import { StaticImageData } from "next/image";
import { BannerProps } from "@/component/mainPage/Banner";
import { SloganProps } from "@/component/mainPage/SloganBlock";

import one1 from "../../public/image/whyProlead/1/1.png";
import one2 from "../../public/image/banner/home/1/1.png";
import one3 from "../../public/image/banner/home/2/3.png";

import two1 from "../../public/image/whyProlead/2/1.png";
import two2 from "../../public/image/whyProlead/2/2.png";
import two3 from "../../public/image/whyProlead/2/3.png";

import three1 from "../../public/image/whyProlead/3/1.png";
import three2 from "../../public/image/whyProlead/3/2.png";
import three3 from "../../public/image/whyProlead/3/3.png";

import onePC from "../../public/image/whyProlead/pc/1.webp";
import twoPC from "../../public/image/whyProlead/pc/2.webp";
import threePC from "../../public/image/whyProlead/pc/3.webp";

import oneMB from "../../public/image/whyProlead/md/1.webp";
import twoMB from "../../public/image/whyProlead/md/2.webp";
import threeMB from "../../public/image/whyProlead/md/3.webp";

import { styled } from "@mui/material/styles";

import { GetStaticProps } from "next";

import Layout from "@/component/mainPage/Layout";

import mbBannerImg from "../../public/image/whyProlead/mb-banner.webp";
import pcBannerImg from "../../public/image/whyProlead/pc-banner.webp";

import { Contact } from "../contact-info";
import {FormData} from "../index"
import { FooterTranslations } from "@/component/MainFooter";


export type Translations = {
  title: string;
  aboutUs: AboutUs;
  rqCodeAboutUs: string;
  learnMore: string;
  contact: Contact;
  submit: string;
  form: FormData;
  whyProlead: AboutUs;
  menu: FooterTranslations
};

type AboutUs = {
  banner: BannerProps;
  slogan: SloganProps;
  services: Array<{
    title: string;
    align: "left" | "right";
    dec: string;
    services: string[];
  }>;
};

type HomeProps = {
  translations: Translations;
};

export const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "100%",
  padding: "111px 50px 0px 50px",

  "@media (max-width:1100px)": {
    padding: "17px 20px 0px 20px",
  },
});

const BACKGROUND_LIST = [
  {
    mobile: oneMB,
    desktop: onePC,
  },
  {
    mobile: twoMB,
    desktop: twoPC,
  },
  {
    mobile: threeMB,
    desktop: threePC,
  },
];

const ICON_ONE = [one1, one2, one3];
const ICON_TWO = [two1, two2, two3];
const ICON_THREE = [three1, three2, three3];

type ICONSType = StaticImageData[][];
const ICONS: ICONSType = [ICON_ONE, ICON_TWO, ICON_THREE];

export default function Home({ translations }: HomeProps) {

  return (
    <Layout
      translations={translations}
      contact={translations.contact}
      learnMore={translations.learnMore}
      banner={translations.whyProlead.banner}
      bannerMbIMG={mbBannerImg}
      bannerIMG={pcBannerImg}
      slogan={translations.whyProlead.slogan}
      services={translations.whyProlead.services}
      bgImgList={BACKGROUND_LIST}
      iconList={ICONS}
      rqCodeAboutUsTitle={translations.rqCodeAboutUs}
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
