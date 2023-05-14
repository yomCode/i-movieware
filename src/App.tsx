import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";

const app = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default app;
