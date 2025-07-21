import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import AppRoutes from "./app/AppRoutes.tsx";
import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
import {Toaster} from "@/shared/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
      <Toaster />
    </Provider>
  </StrictMode>,
);
