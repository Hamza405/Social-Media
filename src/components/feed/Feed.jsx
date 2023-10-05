<<<<<<< HEAD
import { useEffect, useState } from "react";
import useHttpRequest from "../../hooks/useHttpRequest";
=======
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
<<<<<<< HEAD
  const { response, error, loading } = useHttpRequest({
    url: "posts/timeline/650f68e45ffc039cab3e135b",
  });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (response) {
      setPosts((prev) => response.data.posts);
    }
  }, [response]);
=======
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
<<<<<<< HEAD
        {loading && <p>Loading...</p>}
        {!loading &&
          posts.length > 0 &&
          posts.map((p) => <Post key={p._id} post={p} />)}
=======
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
>>>>>>> 297f48d882e4b975dd972456f968aff3b35caa6f
      </div>
    </div>
  );
}
