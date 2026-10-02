import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/Timeline";
import Movements from "../components/Movements/Movements";
import Gallery from "../components/Gallery/Gallery";
import VideoLibrary from "../components/VideoLibrary/VideoLibrary";
import Books from "../components/Books/Books";
import Legacy from "../components/Legacy/Legacy";
import Museums from "../components/Museums/Museums";
import Quotes from "../components/Quotes/Quotes";
import Quiz from "../components/Quiz/Quiz";
import Developer from "../components/Developer/Developer";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Timeline />
      <Movements />
      <Gallery />
      <VideoLibrary />
      <Books />
      <Legacy />
      <Museums />
        <Quotes />
        <Quiz />
        <Developer />
        <Footer />
    </>
  );
}

export default Home;