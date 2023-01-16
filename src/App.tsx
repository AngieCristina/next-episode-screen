import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";

function Screen({ screenStatus }: { screenStatus: string }) {
  if (screenStatus === "video") {
    return (
      <Box width="100%" height="100vh" position="fixed" top="0">
        <AspectRatio ratio={1} h="100%">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9aS-EgdAq6U?controls=0&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
    );
  }

  return (
    <Box width="100%" height="100vh" position="fixed" top="0">
      <Image src="https://i.blogs.es/9f8810/monster/840_560.jpeg" />
    </Box>
  );
}

type VideoStatus = "video" | "image";
function App() {
  const [screenStatus, setScreenStatus] = useState<VideoStatus>("video");
  const handleSetStatus = () => {
    setScreenStatus("image");
  };

  return (
    <div className="App">
      <Screen screenStatus={screenStatus} />
      <Box
        display="flex"
        alignItems="flex-end"
        left="0"
        justifyContent="flex-end"
        width="100%"
        position="fixed"
        bottom="0"
      >
        <Button
          backgroundColor="#A0AEBF"
          mr="10px"
          color="#fff"

          width={{
            sm: "60px",
            md: "100px",
            lg: "200px",
          }}
        >
          Ver creditos
        </Button>
        <Button
          leftIcon={<ArrowForwardIcon />}
          backgroundColor="#7E8877"
          mr="10px"
          width={{
            sm: "100px",
            md: "200px",
            lg: "400px",
          }}
          onClick={(event) => handleSetStatus()}
        >
          Siguiente episodio
        </Button>
      </Box>
    </div>
  );
}

export default App;
