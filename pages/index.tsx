import { styled } from "@mui/material/styles";
import { StaticImageData } from "next/image";
import { BannerProps } from "@/component/mainPage/Banner";
import { SloganProps } from "@/component/mainPage/SloganBlock";

import one1 from "../public/image/banner/home/1/1.png";
import one2 from "../public/image/banner/home/1/2.png";
import one3 from "../public/image/banner/home/1/3.png";

import two1 from "../public/image/banner/home/2/1.png";
import two2 from "../public/image/banner/home/1/1.png";
import two3 from "../public/image/banner/home/2/3.png";

import three1 from "../public/image/banner/home/3/1.png";
import three2 from "../public/image/banner/home/3/2.png";
import three3 from "../public/image/banner/home/3/3.png";


import onePC from "../public/image/banner/home/au-pc-1.webp";
import oneMB from "../public/image/banner/home/au-mb-1.webp";
import twoPC from "../public/image/banner/home/au-pc-2.webp";
import twoMB from "../public/image/banner/home/au-mb-2.webp";
import threePC from "../public/image/banner/home/au-pc-3.webp";
import threeMB from "../public/image/banner/home/au-mb-3.webp";

import { GetStaticProps } from "next";

import Layout from "@/component/mainPage/Layout";

import aboutUsIMG from "../public/image/banner/aboutUs.webp";
import aboutUsMbIMG from "../public/image/banner/aboutUsMb.webp";

import { Contact } from "./contact-info";
import Footer, { FooterTranslations } from "../component/MainFooter";

export type FormData = {
    title:string;
    Firstname: string;
    Lastname: string;
    Tel: string;
    Email: string;
    selector: {
        title: string;
        holder: string;
    };
    Information: string;
    inputRm: string;
    consent: string;
    submit: string;
};


export type Translations = {
  title: string;
  aboutUs: AboutUs;
  rqCodeAboutUs: string;
  learnMore: string;
  contact: Contact;
  submit: string;
  form: FormData;
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


export type HomeProps = {
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


const ICON_ONE = [one1, one2, one3]
const ICON_TWO = [two1, two2, two3]
const ICON_THREE = [three1, three2, three3]

type ICONSType = StaticImageData[][];
const ICONS:ICONSType = [
  ICON_ONE,
  ICON_TWO,
  ICON_THREE
]


export default function Home({ translations }: HomeProps) {
  return (
    <>
       <Layout
      translations={translations}
      contact={translations.contact}
      learnMore={translations.learnMore}
      banner={translations.aboutUs.banner}
      bannerMbIMG={aboutUsMbIMG}
      bannerIMG={aboutUsIMG}
      slogan={translations.aboutUs.slogan}
      services={translations.aboutUs.services}
      bgImgList={BACKGROUND_LIST}
      iconList={ICONS}
      rqCodeAboutUsTitle={translations.rqCodeAboutUs}
      />  
    </>
 
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // Dynamic import with webpack magic comment to include only the specified JSON files
  const translations = await import(`../public/locales/${locale}.json`);

  return {
    props: {
      translations: translations.default,
    },
  };
};
