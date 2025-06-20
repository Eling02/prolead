import { styled } from "@mui/material/styles";
const KnowMoreBtnContainer = styled("div")({
  cursor: "pointer",
  width: 233,
  height: 61,
  borderRadius: 80,
  backgroundColor: "#9C8351",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 26,
  letterSpacing: "1.04px",
  color: "#FFF",
  "@media (max-width:1100px)": {
    width: 103,
    height: 23,
    fontSize: 10,
    letterSpacing: "0.4px",
  },
});

interface KnowMoreBtnProps {
  txt: string;
  onKnowMore: () => void;
}
const KnowMoreBtn: React.FC<KnowMoreBtnProps> = ({ txt, onKnowMore }) => {
  return (
    <KnowMoreBtnContainer onClick={onKnowMore}>{txt}</KnowMoreBtnContainer>
  );
};

export default KnowMoreBtn;
