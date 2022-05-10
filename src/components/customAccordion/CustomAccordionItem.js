// подключение компонентов из библиотеки MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { AccordionItemStyles, getAccordionIcon } from "../../constants/accordion.const";

// деструктуризации объекта входных данных
export const CustomAccordionItem = ({ isExpanded, onActionChange, title, text }) => {
  const { titleBackground, titleColor, titleSize, textColor, textBackground } = AccordionItemStyles;
  return (
    // передача информации открыт/закрыт - isExpanded
    // передача действия при нажатии - onActionChange
    <Accordion expanded={isExpanded} onChange={() => onActionChange()}>
      <AccordionSummary expandIcon={getAccordionIcon(isExpanded)} sx={{ background: titleBackground }}>
        {/* вывод заголовка пункта */}
        <Typography sx={{ width: "33%", flexShrink: 0, fontSize: titleSize, color: titleColor }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ background: textBackground }}>
        {/* вывод текста пункта */}
        <Typography sx={{ color: textColor }}>{text}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
