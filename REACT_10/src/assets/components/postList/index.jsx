import Post from "../post";
import styles from "./styles.module.css";

function PostList({ posts, deletePost }) {
  return (
    <section className={styles.postList}>
      <h1>Список постов</h1>

      <div className={styles.posts}>
        {posts.length === 0 ? (
          <p className={styles.empty}>Постов пока нет</p>
        ) : (
          posts.map((post) => (
            <Post key={post.id} post={post} deletePost={deletePost} />
          ))
        )}
      </div>

      <button className={styles.nextBtn}>Далее</button>
    </section>
  );
}

export default PostList;