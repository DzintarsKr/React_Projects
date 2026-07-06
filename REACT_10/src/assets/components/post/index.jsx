import styles from "./styles.module.css";
import userLogo from "../../icons/user-logo.svg";

function Post({ post, deletePost }) {
  return (
    <article className={styles.post}>
      <div className={styles.user}>
        <img src={userLogo} alt="User logo" />
        <span>User logo</span>
      </div>

      <div className={styles.content}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>

      <div className={styles.actions}>
        <span>ID: {post.id}</span>
        <button onClick={() => deletePost(post.id)}>Удалить</button>
      </div>
    </article>
  );
}

export default Post;