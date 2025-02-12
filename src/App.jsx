import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Events from "./pages/event/Events";
import Layout from "./layout/Layout";
import Trainings from "./pages/trainings/Trainings";
import Projects from "./pages/projects/Projects";
import Documents from "./pages/documents/Documents";
import About from "./pages/about/About";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/document" element={<Documents />} />
          <Route path="/business" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
