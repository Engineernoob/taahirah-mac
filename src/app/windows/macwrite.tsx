"use client";
import { useState, useEffect } from "react";

export default function MacWrite() {
  const [entries, setEntries] = useState<
    { id: string; title: string; content: string; date: string }[]
  >([]);
  const [activeEntry, setActiveEntry] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [fontSize, setFontSize] = useState(12);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  // Load entries
  useEffect(() => {
    const saved = localStorage.getItem("macwrite-entries");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // Save entries
  useEffect(() => {
    localStorage.setItem("macwrite-entries", JSON.stringify(entries));
  }, [entries]);

  const createEntry = () => {
    const title = prompt("New entry title:");
    if (!title) return;
    const newEntry = {
      id: crypto.randomUUID(),
      title,
      content: "",
      date: new Date().toLocaleDateString(),
    };
    setEntries([...entries, newEntry]);
    setActiveEntry(newEntry.id);
    setContent("");
  };

  const saveEntry = () => {
    if (!activeEntry) return alert("No entry selected.");
    setEntries((prev) =>
      prev.map((e) =>
        e.id === activeEntry
          ? { ...e, content, date: new Date().toLocaleDateString() }
          : e
      )
    );
    alert("Saved ✅");
  };

  const deleteEntry = (id: string) => {
    if (confirm("Delete this entry?")) {
      setEntries((prev) => prev.filter((e) => e.id !== id));
      if (id === activeEntry) {
        setActiveEntry(null);
        setContent("");
      }
    }
  };

  const loadEntry = (id: string) => {
    const entry = entries.find((e) => e.id === id);
    if (entry) {
      setActiveEntry(entry.id);
      setContent(entry.content);
    }
  };

  return (
    <div
      className="window-body h-full flex bg-[#EAEAEA] text-black"
      style={{ fontFamily: "Chicago, sans-serif", fontSize: "11px" }}
    >
      {/* Sidebar */}
      <aside className="w-40 border-r border-black bg-white flex flex-col">
        <div className="border-b border-black p-1 flex justify-between items-center bg-[#F0F0F0]">
          <span className="font-bold text-[10px]">Entries</span>
          <button
            className="border border-black text-[10px] px-1 leading-none active:translate-y-px"
            onClick={createEntry}
          >
            +
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {entries.length === 0 && (
            <p className="p-2 italic text-gray-700">No entries yet</p>
          )}
          {entries.map((e) => (
            <div
              key={e.id}
              onClick={() => loadEntry(e.id)}
              className={`p-1 border-b border-dotted border-gray-500 cursor-pointer ${
                e.id === activeEntry
                  ? "bg-black text-white"
                  : "hover:bg-[#DCDCDC]"
              }`}
            >
              <div className="font-bold truncate">{e.title}</div>
              <div className="text-[9px]">{e.date}</div>
            </div>
          ))}
        </div>
      </aside>

      {/* Editor */}
      <section className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="border-b border-black p-1 flex gap-1 items-center bg-[#F0F0F0]">
          <select
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="text-[9px] border border-black bg-white"
          >
            {[10, 12, 14, 16, 18, 24].map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
          <button
            onClick={() => setIsBold(!isBold)}
            className={`px-1 text-[9px] border border-black leading-none ${
              isBold ? "bg-black text-white" : "bg-white"
            }`}
          >
            B
          </button>
          <button
            onClick={() => setIsItalic(!isItalic)}
            className={`px-1 italic text-[9px] border border-black leading-none ${
              isItalic ? "bg-black text-white" : "bg-white"
            }`}
          >
            I
          </button>

          <button
            onClick={saveEntry}
            className="ml-auto text-[9px] px-2 py-0.5 border border-black bg-white active:translate-y-px"
          >
            💾 Save
          </button>

          {activeEntry && (
            <button
              onClick={() => deleteEntry(activeEntry)}
              className="text-[9px] px-2 py-0.5 border border-black bg-white active:translate-y-px"
            >
              🗑 Delete
            </button>
          )}
        </div>

        {/* Text Area */}
        <textarea
          className="flex-1 border border-black p-2 resize-none outline-none bg-white"
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            fontFamily: "Geneva, 'Chicago', monospace",
          }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing your journal entry..."
        />
      </section>
    </div>
  );
}
