import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  // Load notes
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddOrUpdate = () => {
    if (!title || !content) return;

    if (editId) {
      setNotes(
        notes.map((note) =>
          note.id === editId ? { ...note, title, content } : note
        )
      );
      setEditId(null);
    } else {
      setNotes([...notes, { id: Date.now(), title, content }]);
    }

    setTitle("");
    setContent("");
  };

  const handleEdit = (note) => {
    setEditId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-amber-900 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <Header />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <SearchBar search={search} setSearch={setSearch} />

          <NoteForm
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            editId={editId}
            handleAddOrUpdate={handleAddOrUpdate}
          />
        </div>

        <NotesList
          notes={filteredNotes}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
