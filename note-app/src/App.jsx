import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNoteAction } from "./redux/actions/notesAction";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleText(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Проверяем, чтобы поля не были пустыми перед отправкой
    if (!title.trim() || !text.trim()) return;

    dispatch(
      addNoteAction({
        id: Math.random(),
        title,
        text,
      }),
    );

    // Очищаем поля ввода
    setTitle("");
    setText("");
  }

  return (
    <>
      <Header />

      {/* Компонент Main принимает всю форму и список заметок как children */}
      <Main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={handleTitle}
          />
          <input
            type="text"
            placeholder="text"
            value={text}
            onChange={handleText}
          />
          <button type="submit">add note</button>
        </form>

        <h1>notes: </h1>
        <ul>
          {notes.length === 0 ? (
            <p>Empty list</p>
          ) : (
            notes.map((note) => {
              return (
                <li key={note.id}>
                  <span>{note.id} </span>
                  <h4>{note.title}</h4>
                  <p>{note.text}</p>
                </li>
              );
            })
          )}
        </ul>
      </Main>

      <Footer />
    </>
  );
}

export default App;
