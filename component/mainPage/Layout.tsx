import React, { useRef } from "react";
import { StaticImageData } from "next/image";
import Banner, {
  BannerExtraProps,
  BannerProps,
} from "@/component/mainPage/Banner";
import SubBannerBlock, {
  SubBannerBlockProps,
} from "@/component/mainPage/SubBannerBlock";
import SloganBlock, { SloganProps } from "@/component/mainPage/SloganBlock";
import ScanBlock from "@/component/mainPage/ScanBlock";
import FormBlock from "@/component/mainPage/FormBlock";
import ContactBlock from "@/component/mainPage/ContactBlock";

import { styled } from "@mui/material/styles";

import callIcon from "../../public/image/contact/call.png";
import faxIcon from "../../public/image/contact/fax.png";
import locationIcon from "../../public/image/contact/location.png";
import mailIcon from "../../public/image/contact/mail.png";

import MainFooter, { FooterTranslations } from "../MainFooter";
import { Contact } from "@/pages/contact-info";
import Navbar from "../Navbar";

type Translations = {
  title: string;
  aboutUs: AboutUs;
  form: Form;
  rqCodeAboutUs: string;
  menu: FooterTranslations;
};

type AboutUs = {
  banner: {
    title: string;
    desc: string;
  };
  slogan: {
    one: string;
    middle: string;
    end: string;
  };
  services: Array<{
    title: string;
    align: "left" | "right";
    dec: string;
    services: string[];
  }>;
};

export type Form = {
  title: string;
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

const Gap = styled("div")({
  height: 20,

  "@media (max-width:1100px)": {
    height: 12,
  },
});

const BottomGap = styled("div")({
  height: 275,

  "@media (max-width:1100px)": {
    height: 111,
  },
});

type BgImgListProps = {
  mobile: StaticImageData;
  desktop: StaticImageData;
};

export type LayoutProps = {
  banner: BannerProps;
  slogan: SloganProps;
  services: SubBannerBlockProps[];
  bgImgList: BgImgListProps[];
  iconList: StaticImageData[][];
  rqCodeAboutUsTitle: string;
  learnMore: string;
  contact: Contact;
};

export type TranslationsProps = {
  translations: Translations;
};

export default function Layout({
  banner,
  slogan,
  bannerMbIMG,
  bannerIMG,
  services,
  bgImgList,
  iconList,
  rqCodeAboutUsTitle,
  learnMore,
  contact,
  translations,
}: LayoutProps & BannerExtraProps & TranslationsProps) {
  const TEL = [
    {
      ...contact.tel,
      icon: callIcon.src,
    },
  ];
  const FAX = [
    {
      ...contact.Fax,
      icon: faxIcon.src,
    },
  ];
  const Address = [
    {
      ...contact.Address,
      icon: locationIcon.src,
    },
  ];
  const Email = [
    {
      ...contact.Email,
      icon: mailIcon.src,
    },
  ];

  const CONTACT_VALUE = [...TEL, ...FAX, ...Address, ...Email];

  const formRef = useRef<HTMLDivElement | null>(null);
  const scrollToContainer = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar footerTranslations={translations.menu} />
      <Banner
        learnMore={learnMore}
        title={banner.title}
        desc={banner.desc}
        bannerMbIMG={bannerMbIMG}
        bannerIMG={bannerIMG}
        onKnowMore={scrollToContainer}
      />
      <SloganBlock one={slogan.one} middle={slogan.middle} end={slogan.end} />
      {services.map((d, i) => (
        <SubBannerBlock
          key={i}
          mobileImg={bgImgList[i].mobile}
          deskTopImg={bgImgList[i].desktop}
          title={d.title}
          dec={d.dec}
          align={d.align}
          services={d.services}
          iconList={iconList[i]}
          learnMore={learnMore}
          onKnowMore={scrollToContainer}
        />
      ))}

      <Container ref={formRef}>
        <FormBlock
          content={translations.form}
          corporateServices={translations.menu.corporateServices.list}
        />
        <Gap />
        <ScanBlock title={rqCodeAboutUsTitle} />
        <Gap />
        <ContactBlock value={CONTACT_VALUE} />
      </Container>
      <BottomGap />
      <MainFooter footerTranslations={translations.menu} />
    </>
  );
}
