<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
<<<<<<< HEAD
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Lamasocial</span>
        </Link>
=======
        <span className="logo">Lamasocial</span>
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
<<<<<<< HEAD
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
=======
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
      </div>
    </div>
  );
}
