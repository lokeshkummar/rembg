import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar.tsx";
import Lenis from "lenis";
import Footer from "./Components/Footer.tsx";

const App = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
