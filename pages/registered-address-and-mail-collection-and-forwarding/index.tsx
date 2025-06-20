import Image, { StaticImageData } from "next/image";
import { GetStaticProps } from "next";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import oneImg from "../../public/image/registeredAddressandMailCollectionandForwarding/rr-1.webp";
import twoImg from "../../public/image/registeredAddressandMailCollectionandForwarding/rr-2.webp";
import threeImg from "../../public/image/registeredAddressandMailCollectionandForwarding/rr-3.webp";

import t1oneImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t1-1.png";
import t1twoImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t1-2.png";
import t1threeImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t1-3.png";

import t2oneImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t2-1.png";
import t2twoImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t2-2.png";
import t2threeImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t2-3.png";

import t3oneImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t3-1.png";
import t3twoImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t3-2.png";
import t3threeImg from "../../public/image/registeredAddressandMailCollectionandForwarding/table/t3-3.png";



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
export type Translations = {
  hongKongAndOffshoreCompanyRegistration: RegistrationInfo;
  comprehensiveCompanySecretarialServices: RegistrationInfo;
  otherValueAddedServices: RegistrationInfo;
  registeredAddressandMailCollectionandForwarding: RegistrationInfo;
  title: string;
  menu: FooterTranslations
};

export type IndexProps = {
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


const TableContainer = styled("div")({
  borderRadius: 18,
  background: "#FFF",
  boxShadow: "0px 4px 12.4px 4px rgba(0, 0, 0, 0.07)",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "100%",
  maxWidth: 819,
  height: 159,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#525252",
  fontSize: 22,
  letterSpacing: "1.32px",
  "@media (max-width:1100px)": {
    height: 71,
    fontSize: 12,
    letterSpacing: "0.72px",
    // fontSize: 14,
  },
  "@media (max-width:390px)": {
    height: 80,
  },
});

const TableSubContainer = styled("div")({
  height: 87,
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",

  "@media (max-width:1100px)": {
    height: 39,
  },
  "@media (max-width:390px)": {
    height: 65,
  },
});

const TableIconContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 46,
  height: 50,
  "@media (max-width:1100px)": {
    height: 40,

  },
  "@media (max-width:390px)": {
   
  },
});

type TableProcess = {
  list: Array<string>;
  icons: StaticImageData[];
};

const Table: React.FC<TableProcess> = ({ list, icons }) => {
  const isMobile = useMediaQuery("(max-width:1100px)");
  return (
    <TableContainer>
      {list.map((l, i) => (
        <TableSubContainer
          key={i}
          style={{
            borderRight: i === 1 ? "2px #DEDEDE solid" : "none",
            borderLeft: i === 1 ? "2px #DEDEDE solid" : "none",
          }}
        >
          <TableIconContainer>
            <Image
              src={icons[i]}
              width={isMobile ? 20 : 46}
              height={isMobile ? 20 : 46}
              alt=""
            />
          </TableIconContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            {l}
          </div>
        </TableSubContainer>
      ))}
    </TableContainer>
  );
};
// registered-address-and-mail-collection-and-forwarding

// registeredAddressandMailCollectionandForwarding

const ICON_0 = [t1oneImg, t1twoImg, t1threeImg];
const ICON_1 = [t2oneImg, t2twoImg, t2threeImg];
const ICON_2 = [t3oneImg, t3twoImg, t3threeImg];

export default function Index({ translations }: IndexProps) {
  const TXT = translations.registeredAddressandMailCollectionandForwarding;
  const isMobile = useMediaQuery("(max-width:1100px)");

  const DATA_IMG = [
    {
      img: (
        <ImgContainer style={{ marginLeft: isMobile ? 0 : 105 }}>
          <Image
            src={oneImg}
            width={isMobile ? 153 : 423}
            height={isMobile ? 86 : 236}
            alt=""
          />
        </ImgContainer>
      ),
      component: <Table list={TXT.list[0].extraInfo.list} icons={ICON_0} />,
    },
    {
      img: (
        <ImgContainer style={{ marginLeft: isMobile ? 0 : 175 }}>
          <Image
            src={twoImg}
            width={isMobile ? 100 : 275}
            height={isMobile ? 110 : 302}
            alt=""
          />
        </ImgContainer>
      ),
      component: <Table list={TXT.list[1].extraInfo.list} icons={ICON_1} />,
    },
    {
      img: (
        <ImgContainer style={{ marginLeft: isMobile ? 0 : 175 }}>
          <Image
            src={threeImg}
            width={isMobile ? 103 : 283}
            height={isMobile ? 96 : 265}
            alt=""
          />
        </ImgContainer>
      ),
      component: <Table list={TXT.list[2].extraInfo.list} icons={ICON_2} />,
    },
  ];
  return (
    <ServiceInfoLayout context={TXT} imgList={DATA_IMG} translations={translations} />
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
