import Image from "next/image";

import deskTopIMG from "../../public/image/banner/contact-info/dt.webp";
import mbIMG from "../../public/image/banner/contact-info/mb.webp";

import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleContactTxt from "../../component/SingleContactTxt";
import callIcon from "../../public/image/contact/call.png";
import faxIcon from "../../public/image/contact/fax.png";
import locationIcon from "../../public/image/contact/location.png";
import mailIcon from "../../public/image/contact/mail.png";
import googleIcon from "../../public/image/contact/google.png";
import { GetStaticProps } from "next";
import MainFooter, { FooterTranslations } from "@/component/MainFooter";
import Navbar from "@/component/Navbar";

const PaddingContainer = styled("div")({
  width: "100%",
  maxWidth: 1607 - 20, // Corrected maxWidth for clarity
  padding: "0 50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  "@media (max-width:1100px)": {
    padding: "0 20px",
  },
});

const TitleContainer = styled("div")({
  padding: "33px 0",
  width: "100%",
  marginBottom: 9,
  background: "rgba(255, 255, 255, 0.85)",
  boxShadow: "0px 4px 23.1px -9px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(7.25px)",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "@media (max-width:1360px)": {
    display: "none",
  },
  "@media (max-width:1100px)": {},
});
interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleContainer>
      <div
        style={{
          fontSize: 46,
          fontWeight: 500,
          letterSpacing: "2.76px",
          background: "linear-gradient(86deg, #B3801A 3.56%, #C4B274 93.64%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          textShadow: "none",
          width: "100%",
          minHeight: 73,
        }}
      >
        {title}
      </div>
    </TitleContainer>
  );
};

const InfoPaddingContainer = styled("div")({
  padding: "6% 190px 6% 180px",
  boxSizing: "border-box",
  width: "100%",
  marginBottom: 9,
  background: "rgba(255, 255, 255, 0.85)",
  boxShadow: "0px 4px 23.1px -9px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(7.25px)",
  "@media (max-width:1400px)": {
    padding: "6% 80px 6% 80px",
  },
  "@media (max-width:1260px)": {
    padding: "5% 60px 5% 60px",
  },
  "@media (max-width:1100px)": {
    padding: "27px 29px 30px 29px",
  },
  "@media (max-width:600px)": {
    padding: "27px 20px 30px 0px",
  },
});

const MobileShow = styled("div")({
  display: "none",
  "@media (max-width:1260px)": {
    // padding: "5% 60px 5% 60px",
  },
  "@media (max-width:1100px)": {
    display: "block",
  },
});

const DesktopInfoDetails = styled("div")({
  display: "grid",
  gridTemplateColumns: "52% 49%",
  "@media (max-width:1260px)": {
    // padding: "5% 60px 5% 60px",
  },
  "@media (max-width:1100px)": {
    display: "none",
  },
});
type ContactDetail = {
  txt: string;
  value: string[];
};

export type Contact = {
  title: string;
  tel: ContactDetail;
  Address: ContactDetail;
  Email: ContactDetail;
  Fax: ContactDetail;
  GoogleMap: ContactDetail;
};
export type Translations = {
  title: string;
  contact: Contact;
  menu: FooterTranslations;
};

type HomeProps = {
  translations: Translations;
};

const APIkey = "AIzaSyCZoHM36EVWH_aLgDgeVm5VwryY4mx18GM";
const companyAddress = "Yat+Chau+Building";

export default function Index({ translations }: HomeProps) {
  const isMobile = useMediaQuery("(max-width:700px)");

  const TEL = [
    {
      ...translations.contact.tel,
      icon: callIcon.src,
    },
  ];
  const FAX = [
    {
      ...translations.contact.Fax,
      icon: faxIcon.src,
    },
  ];
  const Address = [
    {
      ...translations.contact.Address,
      icon: locationIcon.src,
    },
  ];
  const Email = [
    {
      ...translations.contact.Email,
      icon: mailIcon.src,
    },
  ];
  const GoogleMap = [
    {
      ...translations.contact.GoogleMap,
      icon: googleIcon.src,
    },
  ];
  const CONTACT_VALUE = [...TEL, ...Email, ...Address, ...FAX, ...GoogleMap];

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
          height={450}
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
            backgroundColor: "rgba(148, 148, 148, 0.43)",
          }}
        >
          <PaddingContainer>
            <Title title={translations.contact.title} />
            <InfoPaddingContainer>
              {/* ------ */}
              <DesktopInfoDetails>
                {CONTACT_VALUE.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: i % 2 === 0 ? "start" : "end",
                      marginBottom: "9%",
                      width: "100%",
                      boxSizing: "border-box",
                      // paddingRight:10
                    }}
                  >
                    <div
                      style={{
                        width: i % 2 === 0 ? "95%" : 380,
                      }}
                    >
                      <SingleContactTxt
                        imageUrl={c.icon}
                        title={c.txt}
                        value={c.value}
                      />
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "end",
                    justifyContent: "end",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 482 + 14 + 14,
                      height: 242 + 14 + 14,
                      borderRadius: 38,
                      border: "14px solid #FFF",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFF",
                    }}
                  >
                    <iframe
                      title="map"
                      width="100%"
                      height="100%"
                      src={
                        "https://www.google.com/maps/embed/v1/place?key=" +
                        APIkey +
                        "&q=" +
                        companyAddress +
                        "&zoom=18"
                      }
                      style={{
                        borderRadius: 38,
                      }}
                    />
                  </div>
                </div>
              </DesktopInfoDetails>
              {/* ------ */}
              <MobileShow>
                <div style={{ marginLeft: 29 }}>
                  {CONTACT_VALUE.map((c, i) => (
                    <>
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          width: "100%",
                        }}
                      >
                        <SingleContactTxt
                          imageUrl={c.icon}
                          title={c.txt}
                          value={c.value}
                        />
                      </div>
                      <div style={{ maxHeight: 26, height: "4vh" }}></div>
                    </>
                  ))}
                </div>
                <div
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    paddingLeft: 23,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 322,
                      height: 142,
                      boxSizing: "border-box",
                      borderRadius: 10,
                      border: "6px solid #FFF",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFF",
                    }}
                  >
                    <iframe
                      title="map"
                      width="100%"
                      height="100%"
                      src={
                        "https://www.google.com/maps/embed/v1/place?key=" +
                        APIkey +
                        "&q=" +
                        companyAddress +
                        "&zoom=18"
                      }
                      style={{
                        borderRadius: 5,
                      }}
                    />
                  </div>
                </div>
              </MobileShow>
            </InfoPaddingContainer>
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
