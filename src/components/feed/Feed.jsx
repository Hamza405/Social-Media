import { useEffect, useState } from "react";
import useHttpRequest from "../../hooks/useHttpRequest";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
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
