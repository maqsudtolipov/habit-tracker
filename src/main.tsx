import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
import {Toaster} from "@/shared/ui/sonner.tsx";
import {RouterProvider} from "react-router-dom";
import router from "@/app/router";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
