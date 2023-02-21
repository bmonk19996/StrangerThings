import React from "react";
import {NewPost, PostList} from "./";
import { useOutletContext } from "react-router-dom";
export default function MainPage() {
    const [token, setToken] = useOutletContext()

  return (
    <div>
      <PostList />
      <NewPost token={token}/>
    </div>
  );
}
