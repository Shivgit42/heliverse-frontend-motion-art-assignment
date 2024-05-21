import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Application from "./components/Application";
import Browser from "./components/Browser";
import Features from "./components/Features";

const App = () => {
  return (
    <>
      <div className="md:max-w-[85%] mx-auto p-7 min-h-screen">
        <Header />
        <Hero />
        <Application />
        <Browser />
        <Features />
      </div>
      <Footer />
    </>
  );
};

export default App;
