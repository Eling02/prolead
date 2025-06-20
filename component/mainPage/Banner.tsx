import Image, { StaticImageData } from "next/image";

import KnowMoreBtn from "./KnowMoreBtn";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';


const TitleContainer = styled("div")({
  fontSize: 80,
  fontWeight: 700,
  letterSpacing: "4.8px",
  // 65
  marginBottom: "4%",
  "@media (max-width:1100px)": {
    fontSize: 28,
    letterSpacing: "1.68px",
  },
   "@media (max-width:600px)": {
     marginBottom: 9
  },
});

const DescContainer = styled("div")({
  width: "98%",
  maxWidth: 1128,
  textAlign: "left",
  fontSize: 32,
  fontWeight: 500,
  letterSpacing: "1.92px",
  // (240+106)/786
  height: "44%",
  "@media (max-width:1100px)": {
    fontSize: 12,
    letterSpacing: "0.72px",
    width: "80%",
  },
  "@media (max-width:600px)": {
    width: "96%",
    height: "53%",
  },
});

const PaddingContainer = styled("div")({
  width: "100%",
  color: "#FFF",
  maxWidth: 1607 - 20, // Corrected maxWidth for clarity
  paddingLeft: 50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  "@media (max-width:1100px)": {
    paddingLeft: 22,
  },
});

const BtnContainer = styled("div")({
  "@media (max-width:600px)": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
});

export type BannerProps = {
    title: string;
    desc: string;
};

export type BannerExtraProps = {
  bannerMbIMG: StaticImageData;
  bannerIMG: StaticImageData
  learnMore: string
};

export type BannerExtraOnKnowMoreProps = {
  onKnowMore:()=>void
};


const Banner: React.FC<BannerProps&BannerExtraProps&BannerExtraOnKnowMoreProps> = ({title,desc,bannerMbIMG,bannerIMG,learnMore,onKnowMore}) => {

  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div style={{ width: "100vw", position: "relative" }}>
      <Image
        src={isMobile?bannerMbIMG:bannerIMG}
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
        <PaddingContainer>
          <TitleContainer>
            {isMobile&&title.length>40?title.slice(0,21)+"...":title}
          </TitleContainer>
          <DescContainer>
            {desc}
          </DescContainer>
          <BtnContainer>
            <KnowMoreBtn txt={learnMore} onKnowMore={onKnowMore}/>
          </BtnContainer>
        </PaddingContainer>
      </div>
    </div>
  );
};

export default Banner;
