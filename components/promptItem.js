import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export default function PromptItem({
  isCollapseContent = true,
  handleOnClick,
  prompt,
}) {
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#343541",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        display: "inline-block",
      }}
      onClick={handleOnClick}
    >
      <CardActionArea>
        <CardHeader
          title={prompt.title}
          sx={{ color: "white", paddingBottom: "0" }}
        />

        <CardContent
          sx={
            isCollapseContent
              ? { height: "6rem" }
              : { minHeight: "6rem", maxHeight: "24rem" }
          }
        >
          <Typography
            variant="string"
            color="text.secondary"
            align="center"
            sx={stylesOfTypography(isCollapseContent)}
          >
            {prompt.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function stylesOfTypography(isCollapseContent) {
  const base = {
    color: "rgba(255, 255, 255, 0.7)",
    maxHeight: "100%",
    textAlign: "start",
    fontSize: "1rem",
  };

  if (isCollapseContent) {
    return {
      ...base,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
    };
  } else {
    return {
      ...base,
      minHeight: "6rem",
      maxHeight: "24rem",
      overflow: "scroll",
    };
  }
}
