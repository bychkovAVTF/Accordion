import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// экспорт массива данных пункта
export const AccordionData = [
  {
    title: "title 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "title 2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "title 3",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    title: "title 4",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];

export const AccordionItemStyles = {
  titleBackground: "#800080",
  titleColor: "#FFA500",
  titleSize: "20px",
  textColor: "#000000",
  textBackground: "#FFFF00",
};

export const getAccordionIcon = (isExpanded) =>
  isExpanded ? (
    <ArrowUpwardIcon sx={{ color: "#ffffff" }} />
  ) : (
    <ArrowUpwardIcon sx={{ color: "#808080" }} />
  );
