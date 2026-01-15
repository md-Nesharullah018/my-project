import NoteCard from "./NoteCard";

export default function NotesList({ notes, handleEdit, handleDelete }) {
  if (notes.length === 0) {
    return (
      <p className="text-center text-slate-500 mt-12">
        No notes found
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
