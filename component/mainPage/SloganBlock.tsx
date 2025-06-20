import { styled } from "@mui/material/styles";
const TxtContainer = styled("div")({
  fontSize: 26,
  color: "#525252",
  letterSpacing: "1.56px",
  width: "100%",
  textAlign: "center",
  boxSizing: "border-box",
  padding: "0 20px",
  "@media (max-width:1100px)": {
    fontSize: 10,
    letterSpacing: "0.4px",
    padding: "0 20px",
  },
});

const SloganBlockContainer = styled("div")({
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "153px 0",
  "@media (max-width:1100px)": {
    padding: "26px 0",
  },
});

const MiddleSloganContainer = styled("div")({
  background:
    "linear-gradient(90deg, rgba(156, 131, 81, 0.00) 0%, #9C8351 25%, #9C8351 75%, rgba(156, 131, 81, 0.00) 100%)",
  maxWidth: 1219,
  width: "63%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 26,
  color: "#ffff",
  letterSpacing: "1.56px",
  padding: "13px 0",
  margin: "68px 0",
  "@media (max-width:1100px)": {
    padding: "2px 0",
    margin: "11px 0",
    fontSize: 12,
    letterSpacing: "0.72px",
  },
});
export type SloganProps = {
  one: string;
  middle: string;
  end: string;
};

const SloganBlock: React.FC<SloganProps> = ({ one, middle, end }) => {
  return (
    <SloganBlockContainer>
      <TxtContainer>{one}</TxtContainer>
      <MiddleSloganContainer>
        <div> {middle}</div>
      </MiddleSloganContainer>
      <TxtContainer>{end}</TxtContainer>
    </SloganBlockContainer>
  );
};

export default SloganBlock;
