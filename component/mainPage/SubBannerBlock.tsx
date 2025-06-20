import Image, { StaticImageData } from "next/image";

import KnowMoreBtn from "./KnowMoreBtn";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { Fragment } from "react";

// import { Container } from "../../pages/home/index"

export const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "100%",
  padding: "111px 50px",

  "@media (max-width:1100px)": {
    padding: "0px 20px",
  },
});
interface IconTxtProps {
  icon: StaticImageData;
  width: number;
  height: number;
  txt: string;
}

interface AlignProps {
  textalign?: "left" | "right";
}

// Define the Data type
export interface SubBannerBlockProps {
  title: string;
  dec: string;
  align: "left" | "right"; // Assuming only left or right alignment
  services: string[];
  // iconTxt: IconTxtProps[];
}

export interface SubBannerBlockExtraProps {
  mobileImg: StaticImageData;
  deskTopImg: StaticImageData;
  iconList: StaticImageData[];
  learnMore: string;
  onKnowMore:()=>void
}

const IconTxt: React.FC<IconTxtProps> = ({ icon, width, height, txt }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ width: 48, height: 48 }}>
        <Image alt="" src={icon} width={width} height={height} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: 35,
          width: 119, // (288-119)/2
          color: "#525252",
          fontSize: 22,
          letterSpacing: "1.32px",
        }}
      >
        {txt}
      </div>
    </div>
  );
};

const TitleContainer = styled("div")({
  color: "#2D2D2D",
  fontSize: 60,
  letterSpacing: "3.6px",
  marginBottom: 60,
});

const DescContainer = styled("div")<AlignProps>(() => ({
  maxWidth: 817,
  textAlign: "left",
  color: "#525252",
  fontSize: 32,
  letterSpacing: "1.92px",
  height: 222,
}));

const PaddingContainer = styled("div")<AlignProps>(({ textalign }) => ({
  height: "100%",
  width: "100%",
  maxWidth: 1607 - 20, // Corrected maxWidth for clarity
  paddingLeft: 50,
  paddingRight: 50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: textalign === "left" ? "start" : "end",
  "@media (max-width:1100px)": {
    paddingLeft: 25,
    paddingRight: 25,
  },
}));

const Gap = styled("div")({
  height: 203,
  "@media (max-width:1590px)": {
    height: "10%",
  },
  "@media (max-width:1490px)": {
    height: "5%",
  },
});

const SubBannerBlockDeskTop: React.FC<
  SubBannerBlockProps & SubBannerBlockExtraProps
> = ({
  deskTopImg,
  title,
  dec,
  align,
  services,
  iconList,
  learnMore,
  onKnowMore
}) => {
  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        height: "100%",
        marginTop: -6,
      }}
    >
      <Image
        src={deskTopImg}
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
        <PaddingContainer textalign={align}>
          <TitleContainer>{title}</TitleContainer>
          <DescContainer
            textalign={align}
            style={{
              maxWidth:dec.length>200?1017:817
            }}
          >{dec}</DescContainer>

          <div
            style={{
              display: "flex",
            }}
          >
            {services.map((t, i) => (
              <Fragment key={i}>
                <IconTxt
                  icon={iconList[i]}
                  width={44}
                  height={44}
                  txt={t}
                  key={i}
                />
                {/* (228-119)/2 */}
                {2 > i && (
                  <div
                    style={{
                      margin: "0 54px",
                      height: 87,
                      width: 2,
                      backgroundColor: "#DEDEDE",
                    }}
                  />
                )}
              </Fragment>
            ))}
          </div>
          <Gap />
          <KnowMoreBtn txt={learnMore} onKnowMore={onKnowMore} />
        </PaddingContainer>
      </div>
    </div>
  );
};

const SubBannerBlock: React.FC<
  SubBannerBlockProps & SubBannerBlockExtraProps
> = ({
  mobileImg,
  deskTopImg,
  title,
  dec,
  align,
  services,
  iconList,
  learnMore,
  onKnowMore
}) => {
  const isMobile = useMediaQuery("(max-width:1100px)");
    const isMininMobile = useMediaQuery("(max-width:380px)");
  return (
    <>
      {isMobile ? (
        <Container style={{ marginBottom: 16 }}>
          <div
            style={{
              width: "100%",
              position: "relative",
              height: "100%",
              borderRadius: 16,
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.26) 100%), url(<path-to-image>) lightgray -5.998px -213.289px / 101.581% 365.199% no-repeat",
              boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              src={mobileImg}
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
                borderRadius: 16,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  color: "#FFF",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "83%",
                   textShadow: "0px 4px 4px rgba(0, 0, 0, 0.41)"
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    letterSpacing: "1.08px",
                    marginBottom: isMininMobile?12:19,
                      display: "flex",
                     alignItems: "center",
                  justifyContent: "center",
                    textAlign: "center",
                   
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.72px",
                    textAlign: "center",
                    fontWeight: 400,
                    lineHeight:"19px"
                  }}
                >
                  {dec}
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) :
        <SubBannerBlockDeskTop
          mobileImg={mobileImg}
          deskTopImg={deskTopImg}
          title={title}
          dec={dec}
          align={align}
          services={services}
          iconList={iconList}
          learnMore={learnMore}
          onKnowMore={onKnowMore}
        />
      }
    </>
  );
};

export default SubBannerBlock;
