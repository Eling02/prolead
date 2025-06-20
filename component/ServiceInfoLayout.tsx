import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { Fragment, ReactNode } from "react";
import MainFooter, { FooterTranslations } from "./MainFooter";
import Navbar from "./Navbar";


const TitleTxt = styled("div")({
  fontSize: 54,
  fontWeight: 700,
  letterSpacing: "3.24px",
  color: "#977D4C",
  width: "100%",
  marginTop: 125,
  marginBottom: 60,
  marginLeft: 53,
  "@media (max-width:1100px)": {
    fontSize: 22,
    letterSpacing: "1.32px",
    marginTop: 51,
    marginBottom: 28,
    marginLeft: 0,
  },
  "@media (max-width:600px)": {},
});

const Ball = styled("div")({
  width: 41,
  height: 41,
  backgroundColor: "rgb(209, 229, 255)",
  borderRadius: "100%",

  "@media (max-width:1100px)": {},
  "@media (max-width:600px)": {},
});

const InfoTitleTxt = styled("div")({
  minHeight: 48,
  fontSize: 40,
  fontWeight: 700,
  letterSpacing: "2.4px",
  color: "#2D2D2D",
  marginBottom: 38,
  lineHeight: "38px",
  "@media (max-width:1100px)": {
    minHeight: 22,
    lineHeight: "22px",
    fontSize: 18,
    letterSpacing: "1.08px",
    marginBottom: 23,
  },
  "@media (max-width:600px)": {},
});

const SubDescTxt = styled("div")({
  fontSize: 35,
  letterSpacing: "2.1px",
  color: "#2D2D2D",
  marginLeft: 35,
  marginBottom: 67,
  "@media (max-width:1100px)": {
    fontSize: 14,
    letterSpacing: "0.84px",
    marginLeft: 24,
    marginBottom: 18,
  },
  "@media (max-width:600px)": {},
});

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

const DetailsListContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "41px 1fr",
  "@media (max-width:1100px)": {
    gridTemplateColumns: "1fr",
  },
  "@media (max-width:600px)": {
    gridTemplateColumns: "1fr",
  },
});

const DecorationContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (max-width:1100px)": {
    display: "none",
  },
  "@media (max-width:600px)": {},
});

const InfoTitleTxtImgContainer = styled("div")({
  display: "flex",
  "@media (max-width:1100px)": {
    flexDirection: "column",
    marginBottom: 32,
  },
  "@media (max-width:600px)": {},
});

const ListPaddingContainer = styled("div")({
  boxSizing: "border-box",
  paddingLeft: 112 - 35,
  "@media (max-width:1100px)": {
    paddingLeft: 0,
  },
  "@media (max-width:600px)": {},
});

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
  list: Array<{
    list: { title: string; desc: string; }[];
    title: string;
    desc: string;
  }>
};

type Translations = {
  hongKongAndOffshoreCompanyRegistration: RegistrationInfo;
  title: string;
  menu: FooterTranslations
};

type IndexProps = {
  translations: Translations;
};

type CompanyProcess = {
  title: string;
  desc: string;
  noList: Array<{
    title: string;
    desc: string;
  }>;
};

interface DetailsListProps {
  isLine: boolean;
  children: ReactNode;

  extraChildren: React.ReactNode;
}

const Gap = styled("div")({
  height: 240 - 61,
  "@media (max-width:1100px)": {
    height: 74 - 20,
  },
  "@media (max-width:600px)": {},
});

const DetailsList: React.FC<DetailsListProps & CompanyProcess> = ({
  children,
  isLine,
  title,
  desc,
  noList,
  extraChildren,
}) => {
  const isMobile = useMediaQuery("(max-width:1100px)");

  return (
    <DetailsListContainer>
      <DecorationContainer>
        <Ball />
        {isLine && (
          <div
            style={{
              marginTop: -2,
              backgroundColor: "rgb(209, 229, 255)",
              width: 10,
              flex: "1 1 0",
              minHeight: 50,
            }}
          />
        )}
      </DecorationContainer>

      {/* --- */}
      <div style={{ marginLeft: isMobile ? 0 : 12 }}>
        <InfoTitleTxtImgContainer>
          <div>
            <InfoTitleTxt>{title}</InfoTitleTxt>
            <SubDescTxt>{desc}</SubDescTxt>
          </div>
          {children}
        </InfoTitleTxtImgContainer>

        {noList && (
          <ListPaddingContainer>
            {noList.map((l, i) => (
              <Fragment key={i}>
                <SubInfoTitleTxt>{l.title}</SubInfoTitleTxt>
                <SubSubDescTxt style={{ maxWidth: 987 }}>
                  {l.desc}
                </SubSubDescTxt>
              </Fragment>
            ))}
          </ListPaddingContainer>
        )}
        {extraChildren}
        <Gap />
      </div>
    </DetailsListContainer>
  );
};

// FIXME: 🌟
const SubPaddingContainer = styled("div")({
  width: "100%",
  maxWidth: 1747,
  boxSizing: "border-box",
  padding: "0 50px",
  "@media (max-width:1100px)": {
    padding: "0 30px",
  },
  "@media (max-width:600px)": {
    padding: "0 20px",
  },
});

const GreyLine = styled("div")({
  width: "100%",
  backgroundColor: "#DADADA",
  height: 1,
  marginBottom: 55,
  "@media (max-width:1300px)": {},
  "@media (max-width:1100px)": {
    marginBottom: 29,
  },
  "@media (max-width:600px)": {},
});

interface ImageData {
  img: React.ReactNode;
  component: React.ReactNode;
}
interface extraChildren {
  component: React.ReactNode;
}
interface ServiceInfoLayoutProps {
  // children: ReactNode;
  context: RegistrationInfo;
  imgList: ImageData[];
}

export default function ServiceInfoLayout({
  context,
  imgList,
  translations
}: ServiceInfoLayoutProps & IndexProps) {
  const TXT = context;
  return (
    <>
 <Navbar footerTranslations={translations.menu} />
    <div
      style={{
        width: "100vw",
        position: "relative",
        background:
          "linear-gradient(0deg,rgba(255, 255, 255, 1) 0%, rgba(233, 241, 250, 1) 100%, rgba(227, 240, 255, 1) 100%)",
      }}
    >
      <div
        style={{
          borderBottom: "1px #DADADA solid",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SubPaddingContainer>
          <TitleTxt>{TXT.title}</TitleTxt>
        </SubPaddingContainer>
        <GreyLine />

        <SubPaddingContainer>
          {TXT.list.map((d, i) => (
            <DetailsList
              key={i}
              isLine={!(i === TXT.list.length-1)}
              title={d.title}
              desc={d.desc}
              noList={d.list}
              extraChildren={imgList[i].component}
            >
              {imgList[i].img}
            </DetailsList>
          ))}
        </SubPaddingContainer>
      </div>
      </div>
      <MainFooter footerTranslations={translations.menu} />
</>
  );
}
