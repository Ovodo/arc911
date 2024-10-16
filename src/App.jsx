import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader";
import { styles } from "./constants/styles";

function App() {
  return (
    <div
      className='bg-gradient-to-b min-h-screen from-stone-950 via-gray-950 to-app_blue'
      id='app'
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
