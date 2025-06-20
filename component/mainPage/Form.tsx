import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  FormControlLabel,
  styled,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import emailjs from "emailjs-com";
import { Form } from "./Layout";
import { MenuItemListType } from "../MainFooter";

const FormContainer = styled("div")({
  width: "100%",
  boxSizing: "border-box",
  padding: "89px 86px 0 86px",
  "@media (max-width:1400px)": {
    padding: "89px 66px 0 66px",
  },
  "@media (max-width:1100px)": {
    padding: "31px 18px 0 18px",
  },
});

const SubmitBtn = styled("button")({
  width: 223,
  height: 61,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  border: "none",
  outline: "none",
  backgroundColor: "#9C8351",
  fontWeight: 400,
  borderRadius: 80,
  color: "#FFFF",
  fontSize: 26,
  letterSpacing: "1.04px",
  cursor:"pointer",
  "@media (max-width:1100px)": {
    width: 152,
    height: 26,
    fontSize: 9,
    letterSpacing: "0.36px",
    borderRadius: 5,
  },
});
export const TitleTxt = styled("div")({
  color: "#2D2D2D",
  fontSize: 24,
  letterSpacing: "0.96px",
  marginBottom: 40,
  paddingLeft: 14,
  "@media (max-width:1100px)": {
    fontSize: 16,
    letterSpacing: "0.64px",
    marginBottom: 14,
    paddingLeft: 5,
  },
});

export const FirstRowContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,
  "@media (max-width:1100px)": {
    gridTemplateColumns: "1fr",
    gap: 30,
  },
});

const Gap = styled("div")({
  height: 70,
  "@media (max-width:1100px)": {
    height: 30,
  },
});

const OthGap = styled("div")({
  height: 26,
  "@media (max-width:1100px)": {
    height: 0,
  },
});

export interface FormData {
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  selectedOption: number | string;
  information: string;
  receiveNews: boolean;
}

export type ProLeadFormTableProp = {
  content: Form;
  corporateServices: MenuItemListType[];
};

const StartMarkStyle = styled("span")({
  color: "#FF6D6D",
  fontSize: 24,
  marginLeft: 8,
  "@media (max-width:1100px)": {
    fontSize: 18,
    marginLeft: 6,
  },
});
const StartMark: React.FC = ({}) => {
  return <StartMarkStyle>*</StartMarkStyle>;
};

const ProLeadFormTable: React.FC<ProLeadFormTableProp> = ({
  content,
  corporateServices,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    selectedOption: "",
    information: "",
    receiveNews: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: any) => {
    setFormData((prev) => ({ ...prev, selectedOption: e.target.value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, receiveNews: e.target.checked }));
  };


  const [status, setStatus] = useState({ success: false, message: "" });

  const activateSubmitBtn = Boolean(
    formData.firstName &&
      formData.lastName &&
      formData.tel &&
      formData.email &&
      formData.selectedOption &&
      formData.information
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_170a6a6", // Service ID
        "template_mvbo83m", // Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          tel: formData.tel,
          email: formData.email,
          selectedOption: formData.selectedOption,
          information: formData.information,
          receiveNews: formData.receiveNews ? "TRUE" : "FALSE",
        },
        "tLXrUQBv3Z2-MtcQ1" // User ID
      );
      console.log("result:", { success: true, message: "郵件已成功發送！" });
    } catch (error) {
      console.error("發送失敗:", error);
      setStatus({
        success: false,
        message: `發送失敗: ${error || "請稍後再試"}`,
      });
    } 
    setFormData({
      firstName: "",
      lastName: "",
      tel: "",
      email: "",
      selectedOption: "",
      information: "",
      receiveNews: false,
    });
  };
  const isMobile = useMediaQuery("(max-width:1100px)");

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FirstRowContainer>
          <div>
            <TitleTxt>
              {content.Firstname}
              <StartMark />
            </TitleTxt>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-root": {
                  padding: isMobile ? "8px 0 8px 10px" : "32px 0 32px 32px",
                  height: isMobile ? "380x" : "94px",
                  fontSize: isMobile ? "14px" : "26px",
                  borderRadius: isMobile ? "6px" : "10px",
                },
              }}
            />
          </div>
          <div>
            <TitleTxt>
              {content.Lastname}
              <StartMark />
            </TitleTxt>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-root": {
                  padding: isMobile ? "8px 0 8px 10px" : "32px 0 32px 32px",
                  height: isMobile ? "380x" : "94px",
                  fontSize: isMobile ? "14px" : "26px",
                  borderRadius: isMobile ? "6px" : "10px",
                },
              }}
            />
          </div>
        </FirstRowContainer>

        <Gap />

        <div>
          <TitleTxt>
            {content.Tel}
            <StartMark />
          </TitleTxt>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            name="tel"
            value={formData.tel}
            type="number"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    fontSize: isMobile ? "14px" : "26px",

                    // mr: 1,
                    letterSpacing: "0.88px",
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "10px" : "22px",
                      color: "#81818",
                    }}
                  >
                    +852
                  </div>
                </InputAdornment>
              ),
              sx: {
                padding: isMobile ? "8px 0 8px 10px" : "32px 0 32px 32px",
                height: isMobile ? "380x" : "94px",
                fontSize: isMobile ? "14px" : "26px",
                borderRadius: isMobile ? "6px" : "10px",
              },
            }}
          />
        </div>

        <Gap />

        <div>
          <TitleTxt>
            {content.Email}
            <StartMark />
          </TitleTxt>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              "& .MuiInputBase-root": {
                padding: isMobile ? "8px 0 8px 10px" : "32px 0 32px 32px",
                height: isMobile ? "380x" : "94px",
                fontSize: isMobile ? "14px" : "26px",
                borderRadius: isMobile ? "6px" : "10px",
              },
            }}
          />
        </div>

        <Gap />

        <div>
          <TitleTxt>
            {content.selector.title}

            <StartMark />
          </TitleTxt>
          <FormControl
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                padding: isMobile ? "8px 0 8px 10px" : "32px 0 32px 32px",
                height: isMobile ? "380x" : "94px",
                fontSize: isMobile ? "14px" : "26px",
                borderRadius: isMobile ? "6px" : "10px",
                // padding: "32px 24px",
                // height: "94px",
                // fontSize: "26px",
                fontFamily: '"Noto Sans TC"',
                color: "#525252",
                letterSpacing: "1.04px",

                "&:before, &:after": {
                  display: "none",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D9D9D9",
                borderRadius: isMobile ? "6px" : "10px",
              },
            }}
          >
            <Select
              value={formData.selectedOption}
              onChange={handleSelectChange}
              displayEmpty
              renderValue={(selected) =>
                selected || (
                  <span
                    style={{
                      color: "#818181",
                      fontSize: isMobile ? "14px" : "26px",
                      letterSpacing: "1.04px",
                      fontWeight: 400,
                    }}
                  >
                    {content.selector.holder}
                  </span>
                )
              }
              variant="outlined"
              sx={{
                borderRadius: isMobile ? "6px" : "10px", // Ensure border radius is set here too
                "& .MuiSelect-select": {
                  padding: 0,
                },
              }}
            >
              {corporateServices.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option.txt}
                  sx={{
                    fontSize: isMobile ? "14px" : "26px",
                    fontFamily: '"Noto Sans TC"',
                    color: "#525252",
                    height: isMobile ? "40px" : "72px",
                  }}
                >
                  {option.txt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Gap />

        <div style={{ width: "100%" }}>
          <TitleTxt>
            {content.Information}
            <StartMark />
          </TitleTxt>
          <TextField
            fullWidth
            variant="outlined"
            name="information"
            value={formData.information}
            onChange={handleChange}
            placeholder={content.inputRm}
            multiline
            rows={8}
            sx={{
              "& .MuiInputBase-root": {
                padding: isMobile ? "8px 0 8px 10px" : "32px 0 32px 32px",

                fontSize: isMobile ? "14px" : "26px",
                borderRadius: isMobile ? "6px" : "10px",

                height: isMobile ? "155px" : "334px",

                fontFamily: '"Noto Sans TC"',
                color: "#525252",
                letterSpacing: "1.04px",
                alignItems: "flex-start",

                "& textarea": {
                  padding: "0 !important",
                  "&::placeholder": {
                    color: "#C4C4C4",
                    opacity: 1,
                  },
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D9D9D9",
                borderWidth: "2px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#A0A0A0",
              },
            }}
          />
        </div>

        <OthGap />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.receiveNews}
              onChange={handleCheckboxChange}
              name="receiveNews"
            />
          }
          label={content.consent}
          sx={{
            "& .MuiFormControlLabel-label": {
              color: "#4C47CE",
              fontSize: isMobile ? "10px" : "26px",
              letterSpacing: isMobile ? "0.4px" : "1.04px",
            },
          }}
        />

        <Gap />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <SubmitBtn
            disabled={!activateSubmitBtn}
            style={{
              opacity:activateSubmitBtn?1:0.5
            }}
            type="submit">
            {content.submit}
          </SubmitBtn>
        </div>
      </form>
    </FormContainer>
  );
};

export default ProLeadFormTable;
