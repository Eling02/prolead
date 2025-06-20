import { styled } from "@mui/material/styles";
import locationImg from "../../public/image/contact/location.png";
import React from "react";
import SingleContactTxt from "../SingleContactTxt"
import { StaticImageData } from "next/image";




const Container = styled("div")({
  width: "100%",
  maxWidth: 1607 - 20,
  boxSizing: "border-box",
  padding: "81px 3% 86px 150px",
  boxShadow: "0px 4px 23.1px -9px rgba(0, 0, 0, 0.25)",
  "@media (max-width:1400px)": {
    padding: "81px 3% 86px 40px",
  },
  "@media (max-width:1100px)": {
  padding: "33px 20px 95px 31px",
  },
});

const ContactCardGridContainer = styled("div")({

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 0,
  "@media (max-width:1100px)": {
    gridTemplateColumns: "1fr",
    gap: 26,
  },
  "@media (max-width:600px)": {},
});

const GridGap = styled("div")({
  height: 102,
  "@media (max-width:1100px)": {
    height: 26,
  },
  "@media (max-width:600px)": {},
});




type ContactInfo = {
    txt: string;
    value: string[];
    icon: string;
};

type ContactList = {value:ContactInfo[]}

const ContactBlock: React.FC<ContactList> = ({ value }) => {
  return (
    <Container>
      <ContactCardGridContainer>
        <div>
          <SingleContactTxt
            imageUrl={value[0].icon}
            title={value[0].txt}
            value={value[0].value}
          />
          <GridGap />
          <SingleContactTxt
              imageUrl={value[1].icon}
            title={value[1].txt}
            value={value[1].value}
          />
        </div>

        <div>
          <SingleContactTxt
              imageUrl={value[2].icon}
            title={value[2].txt}
            value={value[2].value}
          />
          <GridGap />
          <SingleContactTxt
              imageUrl={value[3].icon}
            title={value[3].txt}
            value={value[3].value}
          />
        </div>
      </ContactCardGridContainer>
    </Container>
  );
};

export default ContactBlock;
