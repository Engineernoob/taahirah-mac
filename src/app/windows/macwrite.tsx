"use client";
import { useState, useEffect } from "react";

export default function MacJournal() {
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
    const saved = localStorage.getItem("taahirah-journal-entries");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // Save entries
  useEffect(() => {
    localStorage.setItem("taahirah-journal-entries", JSON.stringify(entries));
  }, [entries]);

  const createEntry = () => {
    const title = prompt("New journal entry title:");
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
      className="window-body h-full flex flex-col"
      style={{
        fontFamily: "Chicago, sans-serif",
        fontSize: "11px",
        color: "#000",
        backgroundColor: "#BFBFBF",
        border: "1px solid #000",
        boxShadow:
          "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
      }}
    >
      {/* Header */}
      <header
        className="text-center font-bold"
        style={{
          fontFamily: "Chicago, sans-serif",
          fontSize: "12px",
          borderBottom: "1px solid #000",
          padding: "4px 0",
          backgroundColor: "#BFBFBF",
          userSelect: "none",
        }}
      >
        MacWrite – Journal
      </header>

      {/* Welcome Banner */}
      <div
        className="p-1 italic text-center"
        style={{
          fontSize: "9px",
          backgroundColor: "#BFBFBF",
          color: "#000",
          userSelect: "none",
          borderBottom: "1px solid #808080",
        }}
      >
        Welcome to your personal MacWrite — a space for reflection and creativity.
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className="flex flex-col"
          style={{
            width: "160px",
            borderRight: "1px solid #000",
            backgroundColor: "#fff",
            boxShadow:
              "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
          }}
        >
          <div
            className="flex justify-between items-center px-1"
            style={{
              borderBottom: "1px solid #808080",
              height: "24px",
              fontFamily: "Chicago, sans-serif",
              fontSize: "10px",
              fontWeight: "bold",
              userSelect: "none",
              backgroundColor: "#fff",
            }}
          >
            <span>Journal</span>
            <button
              onClick={createEntry}
              style={{
                fontFamily: "Chicago, sans-serif",
                fontSize: "10px",
                width: "18px",
                height: "18px",
                padding: 0,
                border: "1px solid #000",
                backgroundColor: "#fff",
                color: "#000",
                lineHeight: "16px",
                textAlign: "center",
                cursor: "pointer",
                userSelect: "none",
                boxShadow:
                  "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
              }}
              onMouseDown={(e) =>
                (e.currentTarget.style.backgroundColor = "#000")
              }
              onMouseUp={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
              aria-label="Create new entry"
              type="button"
            >
              +
            </button>
          </div>
          <div
            className="flex-1 overflow-y-auto"
            style={{
              fontFamily: "Chicago, sans-serif",
              fontSize: "10px",
              userSelect: "none",
            }}
          >
            {entries.length === 0 && (
              <p
                className="p-2 italic"
                style={{ color: "#000", fontSize: "9px" }}
              >
                No entries yet
              </p>
            )}
            {entries.map((e) => (
              <div
                key={e.id}
                onClick={() => loadEntry(e.id)}
                className="cursor-pointer"
                style={{
                  padding: "3px 6px",
                  borderBottom: "1px solid #808080",
                  backgroundColor:
                    e.id === activeEntry ? "#000" : "#fff",
                  color: e.id === activeEntry ? "#fff" : "#000",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: "bold",
                  fontFamily: "Chicago, sans-serif",
                  fontSize: "10px",
                  userSelect: "none",
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.backgroundColor = "#000";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseUp={(e) => {
                  if (e.currentTarget.textContent === entries.find(en => en.id === activeEntry)?.title) {
                    e.currentTarget.style.backgroundColor = "#000";
                    e.currentTarget.style.color = "#fff";
                  } else {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#000";
                  }
                }}
                onMouseLeave={(e) => {
                  if (e.currentTarget.textContent === entries.find(en => en.id === activeEntry)?.title) {
                    e.currentTarget.style.backgroundColor = "#000";
                    e.currentTarget.style.color = "#fff";
                  } else {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#000";
                  }
                }}
              >
                <div style={{ fontWeight: "bold" }}>{e.title}</div>
                <div style={{ fontSize: "8px", fontWeight: "normal" }}>{e.date}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* Editor */}
        <section
          className="flex-1 flex flex-col"
          style={{
            backgroundColor: "#BFBFBF",
            boxShadow:
              "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Toolbar */}
          <div
            className="flex items-center gap-1 px-1"
            style={{
              borderBottom: "1px solid #000",
              height: "26px",
              backgroundColor: "#BFBFBF",
              userSelect: "none",
            }}
          >
            <input
              type="number"
              min={9}
              max={12}
              value={fontSize}
              onChange={(e) => {
                let val = Number(e.target.value);
                if (val < 9) val = 9;
                else if (val > 12) val = 12;
                setFontSize(val);
              }}
              style={{
                width: "30px",
                height: "18px",
                fontFamily: "Chicago, sans-serif",
                fontSize: "10px",
                textAlign: "center",
                border: "1px solid #000",
                boxShadow:
                  "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
                backgroundColor: "#fff",
                color: "#000",
                padding: "0",
                marginRight: "4px",
                userSelect: "text",
              }}
              aria-label="Font size"
            />
            <button
              onClick={() => setIsBold(!isBold)}
              style={{
                width: "20px",
                height: "20px",
                fontFamily: "Chicago, sans-serif",
                fontSize: "10px",
                fontWeight: "bold",
                border: "1px solid #000",
                backgroundColor: isBold ? "#000" : "#fff",
                color: isBold ? "#fff" : "#000",
                lineHeight: "18px",
                cursor: "pointer",
                userSelect: "none",
                boxShadow:
                  "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
                padding: 0,
                marginRight: "4px",
              }}
              type="button"
              aria-pressed={isBold}
              aria-label="Bold"
            >
              B
            </button>
            <button
              onClick={() => setIsItalic(!isItalic)}
              style={{
                width: "20px",
                height: "20px",
                fontFamily: "Chicago, sans-serif",
                fontSize: "10px",
                fontStyle: "italic",
                border: "1px solid #000",
                backgroundColor: isItalic ? "#000" : "#fff",
                color: isItalic ? "#fff" : "#000",
                lineHeight: "18px",
                cursor: "pointer",
                userSelect: "none",
                boxShadow:
                  "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
                padding: 0,
                marginRight: "auto",
              }}
              type="button"
              aria-pressed={isItalic}
              aria-label="Italic"
            >
              I
            </button>

            <button
              onClick={saveEntry}
              style={{
                fontFamily: "Chicago, sans-serif",
                fontSize: "10px",
                border: "1px solid #000",
                backgroundColor: "#fff",
                color: "#000",
                height: "20px",
                lineHeight: "18px",
                padding: "0 6px",
                cursor: "pointer",
                userSelect: "none",
                boxShadow:
                  "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
                marginRight: "4px",
              }}
              type="button"
            >
              💾 Save
            </button>

            {activeEntry && (
              <button
                onClick={() => deleteEntry(activeEntry)}
                style={{
                  fontFamily: "Chicago, sans-serif",
                  fontSize: "10px",
                  border: "1px solid #000",
                  backgroundColor: "#fff",
                  color: "#000",
                  height: "20px",
                  lineHeight: "18px",
                  padding: "0 6px",
                  cursor: "pointer",
                  userSelect: "none",
                  boxShadow:
                    "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
                }}
                type="button"
              >
                🗑 Delete
              </button>
            )}
          </div>

          {/* Text Area */}
          <textarea
            className="flex-1 resize-none outline-none"
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              fontFamily: "Chicago, monospace",
              backgroundColor: "#fff",
              border: "2px solid #000",
              boxShadow:
                "inset 1px 1px 0 #fff, inset -1px -1px 0 #000",
              padding: "6px",
              margin: "6px",
              flexGrow: 1,
              resize: "none",
              color: "#000",
              lineHeight: "1.2",
            }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your thoughts here…"
            spellCheck={false}
          />
          {activeEntry && (
            <div
              className="italic"
              style={{
                fontSize: "9px",
                color: "#000",
                padding: "2px 6px",
                borderTop: "1px solid #000",
                userSelect: "none",
                fontFamily: "Chicago, sans-serif",
              }}
            >
              Last updated:{" "}
              {
                entries.find((e) => e.id === activeEntry)?.date
              }
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
