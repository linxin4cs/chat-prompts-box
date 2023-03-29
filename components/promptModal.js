import { Modal, Tooltip } from "@mui/material";
import PromptItem from "./promptItem";
import { Box } from "@mui/system";
import { useState } from "react";
import Alert from "@mui/material/Alert";

export default function PromptModal({ open, onClose, selectedPrompt }) {
  const [isCopyInfoOpen, setIsCopyInfoOpen] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  function handleOnClick() {
    try {
      navigator.clipboard.writeText("test");
      setIsCopySuccess(true);
    } catch {
      setIsCopySuccess(false);
    } finally {
      setIsCopyInfoOpen(true);

      timer && clearTimeout(timer);

      const timerInner = setTimeout(() => {
        setIsCopyInfoOpen(false);
      }, 1000);

      setTimer(timerInner);
    }
  }

  function handleOnClose() {
    onClose();
    setIsCopyInfoOpen(false);
  }

  return (
    <Modal open={open} onClose={handleOnClose}>
      <div>
        {isCopyInfoOpen && (
          <Alert
            severity={isCopySuccess ? "success" : "error"}
            sx={{
              width: "fit-content",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            {isCopySuccess ? "复制成功" : "复制失败"}
          </Alert>
        )}
        <Tooltip title="复制">
          <Box
            sx={{
              maxWidth: "24rem",
              minWidth: "24rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <PromptItem
              isCollapseContent={false}
              handleOnClick={handleOnClick}
              prompt={selectedPrompt}
            />
          </Box>
        </Tooltip>
      </div>
    </Modal>
  );
}
