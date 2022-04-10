// подключение компонентов из библиотеки MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// деструктуризации объекта входных данных
export const CustomAccordionItem = ({ isExpanded, onActionChange, title, text }) => {
  return (
    // передача информации открыт/закрыт - isExpanded
    // передача действия при нажатии - onActionChange
    <Accordion expanded={isExpanded} onChange={() => onActionChange()}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {/* вывод заголовка пункта */}
        <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* вывод текста пункта */}
        <Typography>{text}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
