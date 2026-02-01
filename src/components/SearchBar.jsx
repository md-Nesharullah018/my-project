export default function SearchBar({ search, setSearch }) {
    return (
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  }
