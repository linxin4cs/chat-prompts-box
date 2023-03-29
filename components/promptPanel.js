import { Button, TextField } from "@mui/material";
import PromptItem from "./promptItem";
import PromptModal from "./promptModal";
import { useState } from "react";

export default function PromptPanel({ prompts = [] }) {
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  function handlePromptModalClose() {
    setIsPromptModalOpen(false);
  }

  function handlePromptModalOpen(selectedPrompt) {
    setIsPromptModalOpen(true);
    setSelectedPrompt(selectedPrompt);
  }

  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex flex-row items-center justify-between px-4">
        <TextField id="filled-basic" label="输入关键字" variant="standard" />
        <Button variant="contained">搜索</Button>
      </div>
      <PromptModal
        open={isPromptModalOpen}
        onClose={handlePromptModalClose}
        selectedPrompt={selectedPrompt}
      />
      <div className="overflow-scroll pe-2 ps-4">
        {prompts.map((prompt) => {
          return (
            <PromptItem
              key={prompt.title}
              prompt={prompt}
              handleOnClick={() => handlePromptModalOpen(prompt)}
            />
          );
        })}
      </div>
    </div>
  );
}
