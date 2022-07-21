import "./App.css";
import { ToastContainer } from "react-toastify";
import ProfileCard from "./components/ProfileCard";
import Head from "./components/Head";
import Experiences from "./components/Experience";
import Education from "./components/Education";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="w-full text-white min-h-max ">
      <div className=" bg-gradient-to-b from-cyan-500 to-black">
        <Head />
        <ProfileCard />
        <Experiences />
        <Education />
        <Comments />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
