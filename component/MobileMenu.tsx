import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { FooterTranslations, MenuItemType,COMPANY, CONTACT_US, COMPANY_SERVICE } from "../component/MainFooter";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import closeBtn from "./../public/image/closeBtn.png";

import { SOCIAL_MEDIA_VALUE } from "./Navbar";

import Link from "next/link";
interface ClickProps {
  // onClick: () => void;
  text: string | null | undefined;
}

interface TxtProps {
  text: string | null | undefined;
}
interface MenuBlockProps {
  value: MenuItemType;
  onClose: () => void;
}

const MenuBtnContainer: React.FC<ClickProps> = ({ text }) => {
  return (
    <div
      style={{
        color: "#818181",
        fontSize: 12,
        letterSpacing: "0.48px",
        marginBottom: 14,
        cursor: "pointer",
      }}
    >
      {text}
    </div>
  );
};
const MenuTitle: React.FC<TxtProps> = ({ text }) => {
  return (
    <div
      style={{
        color: "#2D2D2D",
        fontSize: 16,
        letterSpacing: "0.64px",
        marginBottom: 16,
      }}
    >
      {text}
    </div>
  );
};

const MenuBlock: React.FC<MenuBlockProps> = ({ value,onClose }) => {
  return (
    <div style={{ marginBottom: 24 }}>
      <MenuTitle text={value.title} />
      {value.list &&
        value.list.map((c, i) => (
          <Link key={i} href={c.path} style={{ textDecoration: "none" }}
          onClick={onClose}
          >
            <MenuBtnContainer key={i} text={c.txt} />
          </Link>
        ))}
    </div>
  );
};

interface MobileMenuProps {
  onToggleDrawer: () => void;
  drawerShown: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  onToggleDrawer,
  drawerShown,
}) => {
  const { locale } = useRouter();
  const [footerTranslations, setFooterTranslations] =
    useState<FooterTranslations | null>(null);

  useEffect(() => {
    // Dynamically import the locale-specific translation for the footer.
    import(
      /* webpackInclude: /common\.(en|es|fr)\.json$/ */
      `../public/locales/${locale}.json`
    ).then((mod) => {
      setFooterTranslations(mod.default.menu);
    });
  }, [locale]);

  if (!footerTranslations) return null; // or a loading state
  return (
    <Drawer anchor="right" open={drawerShown} onClose={onToggleDrawer}>
      <Box
        sx={{
          width: "186px",
          paddingLeft: "21px",
          paddingRight: "12px",
          paddingTop: "10px",
        }}
        role="presentation"
      >
        <div
          onClick={onToggleDrawer}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            marginBottom: 21,
          }}
        >
          <Image src={closeBtn} alt="" width={33} height={33} />
        </div>
        <MenuBlock value={footerTranslations.company || COMPANY}
        onClose={onToggleDrawer}
        />
        <MenuBlock
          value={footerTranslations.corporateServices || COMPANY_SERVICE}
           onClose={onToggleDrawer}
        />
        <MenuBlock value={footerTranslations.contactUs || CONTACT_US}
         onClose={onToggleDrawer}
        />
        <div style={{ display: "flex", gap: 12, marginTop: 19 }}>
          {SOCIAL_MEDIA_VALUE.map((s, i) => (
               <Link href={s.path} key={s.path} target="_blank">
            <div key={i}>
              <Image alt="" src={s.icon} width={33} height={33} />
              </div>
              </Link>
          ))}
        </div>
        {/* ---- */}
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
