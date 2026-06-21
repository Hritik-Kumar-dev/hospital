import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatButtons from './components/layout/FloatButtons';
import Home from './pages/Home';
import About from './pages/About';
import DoctorsPage from './pages/Doctors';
import ServicesPage from './pages/Services';
import Gallery from './pages/Gallery';
import TestimonialsPage from './pages/Testimonials';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import BookAppointment from './pages/BookAppointment';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/"                   element={<Home />} />
            <Route path="/about"              element={<About />} />
            <Route path="/doctors"            element={<DoctorsPage />} />
            <Route path="/doctors/:id"        element={<DoctorsPage />} />
            <Route path="/services"           element={<ServicesPage />} />
            <Route path="/gallery"            element={<Gallery />} />
            <Route path="/testimonials"       element={<TestimonialsPage />} />
            <Route path="/contact"            element={<Contact />} />
            <Route path="/facilities"         element={<Facilities />} />
            <Route path="/book-appointment"   element={<BookAppointment />} />
          </Routes>
        </div>
        <Footer />
        <FloatButtons />
      </div>
    </BrowserRouter>
  );
};

export default App;
