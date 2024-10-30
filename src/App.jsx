import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import { styles } from "./constants/styles";

function App() {
  return (
    <>
      <Navbar />
      <div
        className='relative w-full flex flex-col items-center text-app_white bg-gradient-to-b  min-h-screen from-stone-950 to-gray-800 via-app_blue'
        id='app'
      >
        <Hero />
        <AboutUs />
        <Services />
        <Team />
        <ContactUs />
        <section
          className={`px-10 h-[50vh] sm:h-screen relative  justify-center w-full py-10  flex flex-col items-center`}
          id='Clients'
        >
          <Header title={"COMPANIES THAT TRUST US"} />
          <div className='mt-[4%] sm:mt-[7%] w-full flex justify-center items-center gap-[4%] sm:gap-[10%]'>
            {["invictus", "landmark", "nedcom", "offshore"].map((item) => {
              return (
                <img
                  key={item}
                  src={`/clients/${item}.png`}
                  alt={item}
                  className=' max-h-[50.73px] max-w-[80px] sm:max-h-[104px] sm:max-w-[275px] object-cover'
                />
              );
            })}
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
