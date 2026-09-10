import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

const ABOUT = {
  name: "Abhishek Yadav",
  role: "Full-Stack Developer",
  age: "21 years old",
  dob: "12 March 2005",
  location: "India",
  email: "abhishekyadav3363@gmail.com",
  github: "https://github.com/abhi2J4",
  linkedin: "https://www.linkedin.com/in/abhishek-yadav-immediate-joiner-4a0835283/",
  skills: ["React", "Node.js", "MongoDB", "Express", "Java","GoLang", "Spring Boot", "Python", "LangChain", "LlamaIndex"],
  experience: "Interned at JSpark AI as Full-Stack Developer — worked on AI-driven web applications.",
  projects: [
    "🍕 Food Delivery App — Spring boot + React",
    "💼 Portfolio Website — MERN Stack + AI",
    "🤖 Diabetes Prediction AI — Python + ML",
  ],
  education: "B.Tech (CSE) with strong DSA and backend skills.",
  hobbies: "Coding, learning new tech, building projects.",
};

const QUICK_OPTIONS = [
  { label: "👤 About Me", value: "about" },
  { label: "🛠️ Skills", value: "skills" },
  { label: "💼 Experience", value: "experience" },
  { label: "🚀 Projects", value: "projects" },
  { label: "🎂 Age & DOB", value: "age" },
  { label: "🎓 Education", value: "education" },
  { label: "📞 Contact", value: "contact" },
  { label: "🌐 Social Links", value: "social" },
];

const getReply = (value) => {
  switch (value) {
    case "about":
      return `👋 Hi! I'm ${ABOUT.name}, a passionate ${ABOUT.role} from ${ABOUT.location}.\n\nI love building full-stack web applications and working with AI/ML technologies. Currently focused on Java, Spring Boot, and LLM-based projects.`;
    case "skills":
      return `🛠️ My Skills:\n\n${ABOUT.skills.map((s) => `• ${s}`).join("\n")}\n\nI'm constantly learning and adding new skills!`;
    case "experience":
      return `💼 Experience:\n\n${ABOUT.experience}\n\nI also built several collaborative and personal projects using MERN stack and WebSockets.`;
    case "projects":
      return `🚀 My Projects:\n\n${ABOUT.projects.join("\n")}\n\nCheck out more on my GitHub!`;
    case "age":
      return `🎂 Age & DOB:\n\n• Age: ${ABOUT.age}\n• Date of Birth: ${ABOUT.dob}\n• Location: ${ABOUT.location}`;
    case "education":
      return `🎓 Education:\n\n${ABOUT.education}\n\nFocused on DSA, System Design, and Backend Development.`;
    case "contact":
      return `📞 Contact Me:\n\n• 📧 Email: ${ABOUT.email}\n• 💻 GitHub: github.com/abhi2J4\n• 🔗 LinkedIn: linkedin.com/in/abhishek-yadav-immediate-joiner-4a0835283\n\nFeel free to reach out anytime!`;
    case "social":
      return `🌐 Social Links:\n\n• GitHub: ${ABOUT.github}\n• LinkedIn: ${ABOUT.linkedin}\n• LeetCode: leetcode.com/u/abhishekyadav3363\n• Instagram: @_jacky_a_j`;
    default:
      return "Please choose an option below 👇";
  }
};

const ChatBot = () => {
  const [open, setOpen] = useState(true);        // ✅ default open
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const bottomRef = useRef(null);

  // Welcome message
  useEffect(() => {
    if (open && !minimized && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            role: "bot",
            text: `👋 Hello! Welcome to Abhishek's Portfolio!\n\nI'm here to tell you about Abhishek Yadav — a passionate Full-Stack Developer.\n\nWhat would you like to know? 👇`,
          },
        ]);
        setShowOptions(true);
      }, 500);
    }
  }, [open, minimized]);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOption = (option) => {
    const userMsg = { role: "user", text: option.label };
    const botMsg = { role: "bot", text: getReply(option.value) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setShowOptions(false);
    setTimeout(() => setShowOptions(true), 500);
  };

  const handleInput = () => {
    if (!input.trim()) return;
    const lower = input.toLowerCase();
    let matched = null;

    if (lower.includes("skill")) matched = "skills";
    else if (lower.includes("project")) matched = "projects";
    else if (lower.includes("experience") || lower.includes("work")) matched = "experience";
    else if (lower.includes("age") || lower.includes("dob") || lower.includes("birth")) matched = "age";
    else if (lower.includes("contact") || lower.includes("email")) matched = "contact";
    else if (lower.includes("education") || lower.includes("study")) matched = "education";
    else if (lower.includes("social") || lower.includes("github") || lower.includes("linkedin")) matched = "social";
    else if (lower.includes("about") || lower.includes("who") || lower.includes("tell")) matched = "about";

    const userMsg = { role: "user", text: input };
    const botMsg = {
      role: "bot",
      text: matched
        ? getReply(matched)
        : "I can only answer questions about Abhishek 😊\nPlease use the quick options below 👇",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    setShowOptions(false);
    setTimeout(() => setShowOptions(true), 500);
  };

  const handleClose = () => {
    setOpen(false);
    setMinimized(false);
    setMessages([]);
    setShowOptions(false);
  };

  const handleReopen = () => {
    setOpen(true);
    setMessages([]);
    setShowOptions(false);
  };

  return (
    <div className="chatBotWrapper">

      {/* Minimized bubble */}
      {minimized && (
        <button className="chatBotToggle" onClick={() => setMinimized(false)}>
          💬
        </button>
      )}

      {/* Fully closed bubble */}
      {!open && !minimized && (
        <button className="chatBotToggle" onClick={handleReopen}>
          💬
        </button>
      )}

      {/* Chat Box */}
      {open && !minimized && (
        <div className="chatBotBox">

          {/* Header */}
          <div className="chatBotHeader">
            <div className="chatBotAvatar">AY</div>
            <div style={{ flex: 1 }}>
              <div className="chatBotName">Abhishek's Assistant</div>
              <div className="chatBotStatus">🟢 Online</div>
            </div>

            {/* Minimize */}
            <button
              className="chatBotHeaderBtn"
              onClick={() => setMinimized(true)}
              title="Minimize"
            >
              —
            </button>

            {/* Close */}
            <button
              className="chatBotHeaderBtn"
              onClick={handleClose}
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chatBotMessages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatMsg ${msg.role}`}>
                {msg.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            ))}

            {/* Quick Options */}
            {showOptions && (
              <div className="chatOptions">
                <p className="chatOptionsLabel">Choose an option:</p>
                <div className="chatOptionButtons">
                  {QUICK_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      className="chatOptionBtn"
                      onClick={() => handleOption(opt)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="chatBotInput">
            <input
              type="text"
              value={input}
              placeholder="Or type your question..."
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleInput()}
            />
            <button onClick={handleInput}>➤</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default ChatBot;