import { useEffect, useState } from "react";
import useHttpRequest from "../../hooks/useHttpRequest";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  const { response, error, loading } = useHttpRequest({
    url: "posts/timeline/650f68e45ffc039cab3e135b",
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (response) {
      setPosts(response.data.posts);
    }
  }, [response]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {loading && <p>Loading...</p>}
        {!loading &&
          posts.length > 0 &&
          posts.map((p) => <Post key={p._id} post={p} />)}
      </div>
    </div>
  );
}
