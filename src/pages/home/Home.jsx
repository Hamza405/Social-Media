import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
<<<<<<< HEAD
import "./home.css";
import useHttpRequest from "../../hooks/useHttpRequest";
=======
import "./home.css"
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
<<<<<<< HEAD
        <Feed />
        <Rightbar />
=======
        <Feed/>
        <Rightbar/>
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
      </div>
    </>
  );
}
