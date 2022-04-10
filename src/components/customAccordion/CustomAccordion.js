import { useState } from "react"; // подключение хука состояния
import { CustomAccordionItem } from "./CustomAccordionItem.js"; // подключение компонента пунтка аккордеона

// экспорт компонента аккордеона
// деструктуризация объекта входных данных {data}
export const CustomAccordion = ({ data }) => {
  // инициализация хука состояния
  // expanded значение состояния
  // setExpanded - функция для изменения состояния
  // false - начальное состояние expanded
  const [expanded, setExpanded] = useState(false);

  // функция для открытия/закрытия пунтка аккордеона
  // если номер панели совпадает с expanded - меняем состояние на false
  // иначе expanded присваиваем номер панели
  const handleChange = (panel) => {
    panel === expanded ? setExpanded(false) : setExpanded(panel);
  };

  // если массив данных не был передан(null) или оказался пустым, то не отображаем аккордеон
  if (!data || data.length === 0) return null;

  return (
    // компонет оболочка
    <div className="Accordion">
      {/* через метод массива map возвращаем массив пунктов аккордеона */}
      {data.map((elem, key) => (
        // компонент пункт аккордеона c входными данными
        <CustomAccordionItem
          // ключ итерации
          key={key}
          // булевое значение открыт/закрыт
          isExpanded={expanded === key}
          // событие при нажатии
          onActionChange={() => handleChange(key)}
          // заголовок пункта
          title={elem.title}
          // описание пункта
          text={elem.description}
        />
      ))}
    </div>
  );
};
