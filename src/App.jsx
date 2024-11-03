import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <div
        className='relative w-full flex flex-col items-center text-app_white bg-gradient-to-b  min-h-screen   from-stone-900  via-stone-00 to-stone-900 '
        id='app'
      >
        <Hero />
        <AboutUs />
        <Services />
        <Team />
        <ContactUs />
        <div
          className={`px-10 h-[50vh] bg-gradient-to- from-stone-900 via-app_milk to-stone-900 sm:h-screen relative  justify-center w-full py-10  flex flex-col items-center`}
          id='Clients'
          style={{
            scrollSnapAlign: "center",
          }}
        >
          <Header dark={!true} title={"COMPANIES THAT TRUST US"} />
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
        </div>
      </div>
    </>
  );
}

export default App;
