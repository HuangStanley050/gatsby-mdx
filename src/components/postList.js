import React from "react";
import PostCard from "./postCard";
import styles from "../css/postlist.module.css";
const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <section className={styles.posts}>
      <h1>Jin Kazama</h1>
      <h4>Personal Blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />;
        })}
      </div>
    </section>
  );
};

export default PostList;
