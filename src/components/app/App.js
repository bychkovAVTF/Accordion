import "./App.css"; // подключение css стилей
import { CustomAccordion } from "../customAccordion/CustomAccordion"; // подключение компонента аккордеон
import { AccordionData } from "../../constants/accordion.const"; // подключение массива данных пунктов аккордеона 
 
// экспорт компонента
export const App = () => {
  return (
    // компонент обертка приложения
    <div className="App">
      {/* компонент аккордеон; входные данные data - массив данных пунтков */}
      <CustomAccordion data={AccordionData} />
    </div>
  );
};
