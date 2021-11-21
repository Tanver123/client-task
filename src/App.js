import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Story from "./Components/Story/Story";
import About from "./Components/About/About";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Story></Story>
      <About></About>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}

export default App;
