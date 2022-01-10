import React, { Suspense } from "react";
import { CookiesProvider } from "react-cookie";
import AppContextProvider from "./contexts/AppContext";
import Pages from "./pages";


function App() {
  return (
    <CookiesProvider>
      <AppContextProvider>
        <Suspense>
          <Pages />
        </Suspense>
      </AppContextProvider>
    </CookiesProvider>
  );
}

export default App;
