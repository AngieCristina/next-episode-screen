import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import {
  AspectRatio,
  background,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  keyframes,
} from "@chakra-ui/react";

const changeBackground = keyframes`
 0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;
function Screen({ screenStatus }: { screenStatus: string }) {
  if (screenStatus === "video") {
    return (
      <Box width="100%" height="100vh" position="fixed" top="0">
        <AspectRatio ratio={1} h="100%">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9aS-EgdAq6U?controls=0&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
    );
  }

  return (
    <Box width="100%" height="100vh" position="fixed" top="0">
      <Image
        src="https://i.blogs.es/9f8810/monster/840_560.jpeg"
        h="100%"
        w="100%"
      />
    </Box>
  );
}

type VideoStatus = "video" | "image";
function App() {
  const [screenStatus, setScreenStatus] = useState<VideoStatus>("video");
  const [creditStatus, setCreditStatus] = useState(true);

  const handleSetStatus = () => {
    setScreenStatus("image");
    setCreditStatus(false);
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
        {creditStatus && (
          <Button
            backgroundColor="#4D4D4D"
            fontSize="16px"
            letterSpacing="0.2em"
            fontWeight="bold"
            mr="10px"
            color="#fff"
            width={{
              sm: "60px",
              md: "120px",
              lg: "200px",
            }}
            onClick={() => setCreditStatus(!creditStatus)}
          > p
            Watch Credits
          </Button>
        )}
        {creditStatus && (
          <Button
            leftIcon={<ArrowForwardIcon />}
            mr="10px"
            borderRadius="4px"
            fontWeight="bold"
            fontSize="16px"
            letterSpacing="0.2em"
            width={{
              sm: "120px",
              md: "200px",
              lg: "300px",
            }}
            padding="5px 12px"
            boxShadow="0 3px 10px rgba(0, 0, 0, 0.2)"
            background="linear-gradient(to right, white 50%, gray 50%)"
            backgroundSize="200% 100%"
            backgroundPosition="100% 0%"
            animation={`${changeBackground} 3s linear`}
            onClick={(event) => handleSetStatus()}
          >
            Next Episode
          </Button>
        )}
      </Box>
    </div>
  );
}

export default App;
