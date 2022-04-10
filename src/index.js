import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app/App.js";

// метод для отображения приложения (компонент, элемента в котором будет отображние)
ReactDOM.render(
  // строгий режим для обнаружения потенциальных проблем в приложении
  <React.StrictMode>
    {/* // основноый компонент приложения */}
    <App />
  </React.StrictMode>,
  // поиск элемента по id в public/index.html
  document.getElementById("root")
);
