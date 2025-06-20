import React, { ReactNode } from "react";
import Image from "next/image";
import { useState } from "react";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
// import MainFooter from "./MainFooter";
// import Footer from "./Footer";

import upImg from "../public/image/up.png";
import whatsAppImg from "../public/image/whatsApp.png";
import { styled } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import TestFooter from "./TestFooter";
interface LayoutProps {
  children: ReactNode;
}

const FixedBallsContainer = styled("div")({
  position: "fixed",
  bottom: 100,
  right: 21,
  display: "flex",
  flexDirection: "column",
  gap: 35,
  "@media (max-width:1100px)": {
    gap: 17,
    bottom: 60,
  },
  "@media (max-width:600px)": {},
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:1100px)");
  const [drawerShown, setDrawerShown] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleDrawer = () => {
    setDrawerShown(!drawerShown);
  };

  const sizeOfFixedBall = isMobile ? 46 : 90;
  return (
    <main>
      <div style={{ position: "relative" }}>
        {/* <Navbar onHamburgerMenu={toggleDrawer} /> */}
        {children}
        {/* <MobileMenu
        drawerShown={drawerShown}
        onToggleDrawer={() => toggleDrawer()}
      /> */}

        <FixedBallsContainer>
          <Image
            alt=""
            src={upImg}
            width={sizeOfFixedBall}
            height={sizeOfFixedBall}
            onClick={scrollToTop}
          />
          <Link href={"https://api.whatsapp.com/send?phone=85261597828"}>
            <Image
              alt=""
              src={whatsAppImg}
              width={sizeOfFixedBall}
              height={sizeOfFixedBall}
            />
          </Link>
        </FixedBallsContainer>
      </div>
    </main>
  );
};

export default Layout;
