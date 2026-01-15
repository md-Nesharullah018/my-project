export default function NoteCard({ note, handleEdit, handleDelete }) {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
        <h2 className="text-lg font-semibold text-slate-800 mb-2 truncate">
          {note.title}
        </h2>
  
        <p className="text-slate-600 text-sm mb-4 break-words">
          {note.content}
        </p>
  
        <div className="flex justify-end gap-4 text-sm">
          <button
            onClick={() => handleEdit(note)}
            className="text-slate-700 hover:text-slate-900"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(note.id)}
            className="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  