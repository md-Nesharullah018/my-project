export default function NoteForm({
    title,
    content,
    setTitle,
    setContent,
    editId,
    handleAddOrUpdate,
  }) {
    return (
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-3 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <textarea
          placeholder="Write your note..."
          className="w-full mb-4 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
  
        <button
          onClick={handleAddOrUpdate}
          className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-900 transition"
        >
          {editId ? "Update Note" : "Add Note"}
        </button>
      </div>
    );
  }
  