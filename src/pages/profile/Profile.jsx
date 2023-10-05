import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
<<<<<<< HEAD
  const PB = process.env.REACT_APP_PUBLIC_FOLDER;
=======
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
<<<<<<< HEAD
                src={`${PB}post/3.jpeg`}
=======
                src="assets/post/3.jpeg"
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
                alt=""
              />
              <img
                className="profileUserImg"
<<<<<<< HEAD
                src={`${PB}person/7.jpeg`}
=======
                src="assets/person/7.jpeg"
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
                alt=""
              />
            </div>
            <div className="profileInfo">
<<<<<<< HEAD
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
=======
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
<<<<<<< HEAD
            <Rightbar profile />
=======
            <Rightbar profile/>
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
          </div>
        </div>
      </div>
    </>
  );
}
