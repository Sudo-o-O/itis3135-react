import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import "./index.css";
import "./default.css";

import Layout from "./components/Layout";

import Index from "./Index";
import Contract from "./Contract";
import Survey from "./Survey";
import Cards from "./Cards";
import Inventory from "./Inventory";
import Documentation from "./Documentation";
import Product from "./Product";
import Highlight from "./Highlight";
import IntroForm from "./IntroForm";
import WebsiteEvaluations from "./WebsiteEvaluations";
import TechnicalDocumentation from "./TechnicalDocumentation";

import Hobby from "./Hobby/Hobby";
import CrappyPage from "./Stuff/CrappyPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="contract" element={<Contract />} />
          <Route path="survey" element={<Survey />} />
          <Route path="cards" element={<Cards />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="product" element={<Product />} />
          <Route path="highlight" element={<Highlight />} />
          <Route path="intro_form" element={<IntroForm />} />
          <Route path="website_evaluations" element={<WebsiteEvaluations />} />
          <Route
            path="technical-documentation"
            element={<TechnicalDocumentation />}
          />
        </Route>
        <Route path="slideshow" element={<Slideshow />} />

        <Route path="/hobby" element={<Hobby />} />
        <Route path="/stuff/crap-page" element={<CrappyPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
