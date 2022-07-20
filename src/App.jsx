import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Head from "./components/Head";
import Experiences from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="w-screen h-full text-white bg-gradient-to-b from-cyan-500 to-black">
      <div className="flex-wrap text-shadow-md">
        <Head />
        <ProfileCard />
        <Experiences />
        <Education />
      </div>
    </div>
  );
}

export default App;
