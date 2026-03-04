import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

// Registro del Service Worker para que sea instalable como App
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker listo', reg))
      .catch(err => console.log('Error en Service Worker', err));
  });
}

createRoot(document.getElementById("root")!).render(<App />);