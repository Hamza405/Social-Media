import "./closeFriend.css";

<<<<<<< HEAD
export default function CloseFriend({ user }) {
  const PB = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PB + user.profilePicture} alt="" />
=======
export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
