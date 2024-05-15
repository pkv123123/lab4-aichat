"use client";

import { useChat } from "ai/react";
import styles from "./chat.module.css";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className={styles["flex-container"]}>
      <div className={styles["chat-area"]}>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${styles["message-container"]} ${
              m.role === "user" ? styles["user-message"] : styles["bot-message"]
            }`}
          >
            <div
              className={`${styles["message-bubble"]} ${
                m.role === "user" ? styles["user-bubble"] : styles["bot-bubble"]
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles["input-form"]}>
        <input
          className={styles["input-field"]}
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button type="submit" className={styles["send-button"]}>
          Send
        </button>
      </form>
    </div>
  );
}
