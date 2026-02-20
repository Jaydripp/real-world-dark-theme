"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (document.querySelector('script[data-vf-widget="true"]')) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.setAttribute("data-vf-widget", "true");

    script.onload = () => {
      const cssUrl = `${window.location.origin}/style.css`;
      (window as unknown as { voiceflow?: { chat?: { load: (config: unknown) => void } } }).voiceflow?.chat?.load({
        verify: { projectID: "6872f9b4bf484647c1703e07" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        assistant: {
          title: "TRW Gym Support",
          stylesheet: cssUrl,
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="gym-card">
      <h1 className="gym-title">TRW 2.0 Gym</h1>
      <p className="gym-desc">
        Welcome to the Member Portal.
        <br />
        Our AI agent is online and ready to help.
      </p>

      <button
        onClick={() => (window as unknown as { voiceflow?: { chat?: { open?: () => void } } }).voiceflow?.chat?.open?.()}
        style={{
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          background: "#3b82f6",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Open Chat
      </button>
    </div>
  );
}
