import { render, screen } from "@testing-library/react"; // подклчаем функции тестирования

import { CustomAccordion } from "../../components/customAccordion/CustomAccordion"; // подключение компонента аккордеона
import { AccordionData } from "../../constants/accordion.const"; // подключение массива данных пунктов

const accordionTestData = [AccordionData[0]]; // создаем тестовый массив данных из одного элемента

// название тестов
describe("Accordion component", () => {
  // проверка на отображение компонента с данными
  it("Accordion render", () => {
    // отображение компонента
    render(<CustomAccordion data={accordionTestData} />);
    // проверка содержит ли компонент загловок 
    expect(screen.getByText(accordionTestData[0].title)).toBeInTheDocument();
    // проверка содержит ли компонент описание 
    expect(screen.getByText(accordionTestData[0].description)).toBeInTheDocument();
  });

  // проверка если в компонент были переданы данные или был передан пустой массив
  it("Accordion render without data", () => {
    // отрис компонента
    render(<CustomAccordion />);
    // проверка что заголовок не отображается
    expect(screen.queryByText(accordionTestData[0].title)).toBeNull();
    // проверка что описание не отображается
    expect(screen.queryByText(accordionTestData[0].description)).toBeNull();
  });

  it("Accordion snapshot", () => {
    // отображение компонента и сохранение его в переменную 
    const accordion = render(<CustomAccordion data={accordionTestData} />);
    // создаем снимок тегов компонента
    expect(accordion).toMatchSnapshot();
  });
});
