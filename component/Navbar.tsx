import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import MainPadding from "./MainPadding";

import proleadLogo from "./../public/image/prolead_logo.png";
import proleadLogoMobile from "../public/prolead_logo_mobile.png";

import facebookIcon from "./../public/image/socialMediaIcon/facebook.png";
import insIcon from "./../public/image/socialMediaIcon/ins.png";
import xiaoHongShuIcon from "./../public/image/socialMediaIcon/xiaoHongShu.png";
import mailIcon from "./../public/image/socialMediaIcon/mail.png";
import languageIcon from "./../public/image/socialMediaIcon/language.png";
import hamburgeBtnIcon from "./../public/image/hamburgeBtn.png";

import {
  FooterProps,
  FooterTranslations,
  MenuItemType,
} from "../component/MainFooter";
import Link from "next/link";
import {
  ClickAwayListener,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MobileMenu from "./MobileMenu";
interface MainNavbarProps {
  onHamburgerMenu: () => void; // Define the type for the onHamburgerMenu prop
  position: any;
}

const DesktopSocialMediaContainer = styled("div")({
  width: "100%",
  maxWidth: 302,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width:1260px)": {
    maxWidth: 222,
  },
  "@media (max-width:1100px)": {
    display: "none",
  },
});

const MobileDisplayContainer = styled("div")({
  display: "none",
  "@media (max-width:1100px)": {
    display: "flex",
    gap: 5,
  },
});

const DesktopMenuTextContainer = styled("div")({
  padding: "0 34px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#2D2D2D",
  fontWeight: 500,
  letterSpacing: "1.44px",
  fontSize: 24,
  "@media (max-width:1260px)": {
    padding: "0 20px",
  },
  "@media (max-width:1100px)": {
    display: "none",
  },
});

const DesktopShow = styled("div")({
  display: "block",
  "@media (max-width:1100px)": {
    display: "none",
  },
});
const MobileShow = styled("div")({
  display: "none",
  "@media (max-width:1100px)": {
    display: "block",
  },
});

export const SOCIAL_MEDIA_VALUE = [
  {
    icon: facebookIcon,
    path: "https://www.facebook.com/people/Pro-Lead/pfbid0jbuWWkqjSFnF8a98SMNiqXoWGLdnvXSHzQG487f33vCszJ8rwoBq4qPZgU6QoBtel/",
    width: null,
    high: null,
  },
  {
    icon: insIcon,
    path: "https://www.instagram.com/prolead.corporate/?igsh=dWdtNThrYTVkeG5h&utm_source=ig_contact_invite#",
    width: null,
    high: null,
  },

  {
    icon: xiaoHongShuIcon,
    path: "https://www.xiaohongshu.com/user/profile/68149147000000000e012a7e?xsec_token=YBEhULyBiAeBYwEQt3VCEgcS3zVC900n7mZFAV_tgCKoo=&xsec_source=app_share&xhsshare=CopyLink&appuid=68149147000000000e012a7e&apptime=1746517612&share_id=5cd968a39bf44ddd97c89b406d94bb42",
    width: null,
    high: null,
  },
];
const MAIL_VALUE = [
  {
    icon: mailIcon,
    path: "mailto:cs@prolead.com.hk",
    width: 32,
    high: 26,
    mobile_width: 15,
    mobile_high: 13,
  },
];
const HEADER_MANU = [...SOCIAL_MEDIA_VALUE, ...MAIL_VALUE];

interface CenteredTextProps {
  text: string;
}

const MenuText: React.FC<CenteredTextProps> = ({ text }) => {
  return <DesktopMenuTextContainer>{text}</DesktopMenuTextContainer>;
};

const LanguageBtn: React.FC = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLocale = (language: string) => {
    // Change the locale to 'zh-Hans'
    router.push(router.asPath, router.asPath, { locale: language });
  };

  const isMobile = useMediaQuery("(max-width:1100px)");

  return (
    <>
      {isMobile ? (
        <div
          style={{
            width: 33,
            height: 33,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={(event: React.MouseEvent<HTMLImageElement>) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <Image
            alt=""
            src={languageIcon}
            width={17}
            height={17}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
        </div>
      ) : (
        <div
          style={{}}
          onClick={(event: React.MouseEvent<HTMLImageElement>) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <Image
            alt=""
            src={languageIcon}
            width={32}
            height={32}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
        </div>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          opacity: 0.9,
          borderRadius: "0px",
        }}
      >
        <Link
          href={router.asPath}
          locale="en"
          style={{ textDecoration: "none" }}
          onClick={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleChangeLocale("en");
            }}
            sx={{
              color: "gray",
              width: "55px",
              fontSize: 10,
              paddingLeft: "10px",
              borderRadius: "1px",
            }}
          >
            English
          </MenuItem>
        </Link>
        <Link
          href={router.asPath}
          locale="zh-CN"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              handleChangeLocale("zh-Hans");
            }}
            sx={{
              color: "gray",
              width: "55px",
              fontSize: 10,
              paddingLeft: "10px",
            }}
          >
            简体
          </MenuItem>
        </Link>
        <Link
          href={router.asPath}
          locale="zh-Hans"
          style={{ textDecoration: "none" }}
          onClick={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleChangeLocale("zh-Hans");
            }}
            sx={{
              color: "gray",
              width: "55px",
              fontSize: 10,
              paddingLeft: "10px",
            }}
          >
            繁體
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

const DesktopSocialMedias: React.FC = () => {
  return (
    <DesktopSocialMediaContainer>
      {HEADER_MANU.map((s, i) => (
        <Link href={s.path} key={s.path} target="_blank">
          <div key={i}>
            <Image
              alt=""
              src={s.icon}
              width={s.width ? s.width : 40}
              height={s.high ? s.high : 40}
            />
          </div>
        </Link>
      ))}
      <LanguageBtn />
    </DesktopSocialMediaContainer>
  );
};

const MailMenus: React.FC = () => {
  return (
    <>
      {MAIL_VALUE.map((s, i) => (
        <Link href={s.path} style={{textDecoration:"none"}} key={i} >
          <div
    
          style={{
            width: 33,
            height: 33,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            alt=""
            src={s.icon}
            width={s.mobile_width}
            height={s.mobile_high}
          />
        </div>
        </Link>
     
      ))}
    </>
  );
};

const Logo: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <DesktopShow>
        <Image
          alt=""
          src={proleadLogo}
          width={210}
          height={98}
          onClick={() => router.push("/")}
        />
      </DesktopShow>
      <MobileShow>
        <Image
          alt=""
          src={proleadLogoMobile}
          width={80}
          height={41}
          onClick={() => router.push("/")}
        />
      </MobileShow>
    </>
  );
};

interface DropdownMenuProps {
  txt: React.ReactNode;
  menuItems: Array<{
    txt: string;
    path: string;
  }>;
  // minWidth?: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ txt, menuItems }) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        ref={anchorRef}
        onClick={handleToggle}
        style={{ display: "inline-block", cursor: "pointer" }}
      >
        {txt}
      </div>

      <Menu
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "0 0 20px 20px",
            padding: 0,
            marginTop: "5px",
            minWidth: 200,
          },
          "& .MuiList-root": {
            padding: 0,
          },
          "& .MuiMenuItem-root": {
            height: 72,
            textDecoration: "none",
            fontSize: 18,
            letterSpacing: "1.08px",
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            passHref
            style={{ textDecoration: "none", color: "#2D2D2D" }}
            onClick={handleClose}
          >
            <MenuItem>{item.txt}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

const MainNavbar: React.FC<MainNavbarProps & FooterProps> = ({
  position,
  onHamburgerMenu,
  footerTranslations,
}) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#FFFF",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        position: position,
        zIndex: 1,
        top: 0,
        opacity: position === "relative" ? 0 : 1,
      }}
    >
      <MainPadding>
        <Logo />
        <div style={{ flex: "1 1 0", maxWidth: 58 }} />
        <div style={{ display: "flex" }}>
          <Link
            href={footerTranslations?.header[0].path}
            style={{ textDecoration: "none" }}
          >
            <MenuText text={footerTranslations?.header[0].txt} />
          </Link>

          <DesktopMenuTextContainer>
            <DropdownMenu
              txt={footerTranslations?.header[1].txt}
              menuItems={footerTranslations?.corporateServices.list}
            />
          </DesktopMenuTextContainer>
          {/* -- */}
          <DesktopMenuTextContainer>
            <DropdownMenu
              txt={footerTranslations?.header[2].txt}
              menuItems={footerTranslations?.contactUs.list}
            />
          </DesktopMenuTextContainer>
          {/* -- */}
        </div>
        <div style={{ flex: "1 1 0" }} />
        <MobileDisplayContainer>
          <MailMenus />
          <LanguageBtn />
          <div onClick={onHamburgerMenu}>
            <Image src={hamburgeBtnIcon} alt="" width={33} height={33} />
          </div>
        </MobileDisplayContainer>

        {/* 222+80 */}
        <DesktopSocialMedias />
      </MainPadding>
    </div>
  );
};

const Navbar: React.FC<FooterProps> = ({ footerTranslations }) => {
  const [drawerShown, setDrawerShown] = useState(false);
  const toggleDrawer = () => {
    setDrawerShown(!drawerShown);
  };
  return (
    <>
      <MainNavbar
        onHamburgerMenu={toggleDrawer}
        position={"relative"}
        footerTranslations={footerTranslations}
      />
      <MainNavbar
        onHamburgerMenu={toggleDrawer}
        position={"fixed"}
        footerTranslations={footerTranslations}
      />
      <MobileMenu
        drawerShown={drawerShown}
        onToggleDrawer={() => toggleDrawer()}
      />
    </>
  );
};

export default Navbar;
