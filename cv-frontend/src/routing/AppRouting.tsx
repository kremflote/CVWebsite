import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, PortfolioPage, CvPage, NotFoundPage } from "../pages";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { backgroundColor } from "../styles/styles";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className={`${backgroundColor}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouting;
