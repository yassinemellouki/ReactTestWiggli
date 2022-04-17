import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppDataProvider } from "./context/appData";
import Layout from "./layout";
import Home from "./pages/home";
import View from "./pages/view";
import Type from "./pages/type";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AppDataProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<View />} />
            <Route path="/type" element={<Type />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AppDataProvider>
  );
}

export default App;
