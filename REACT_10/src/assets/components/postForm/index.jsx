import { useState } from "react";
import styles from "./styles.module.css";
import userLogo from "../../icons/user-logo.svg";

function PostForm({ createPost }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!title.trim() || !text.trim()) {
      return;
    }

    createPost({
      title,
      text,
    });

    setTitle("");
    setText("");
  };

  return (
    <section className={styles.postForm}>
      <h1>Написать пост</h1>

      <form className={styles.form} onSubmit={submitHandler}>
        <img className={styles.userLogo} src={userLogo} alt="User logo" />

        <div className={styles.fields}>
          <label>
            Заголовок
            <input
              type="text"
              placeholder="Заголовок"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <label>
            Текст поста
            <textarea
              placeholder="Введите текст..."
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </label>

          <button type="submit">Публикация</button>
        </div>
      </form>
    </section>
  );
}

export default PostForm;