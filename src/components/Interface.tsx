import { Box } from "@chakra-ui/react";
import React from "react";
import { ProgressBar } from "./ProgressBar";
import { SoundSlider } from "./SoundSlider";

interface Props {
  videoElement?: HTMLVideoElement;
  soundValue?: number;
  onVolumeChange?: (volume: number) => void;
}

const Interface = ({ videoElement, soundValue, onVolumeChange }: Props) => {
  React.useEffect(() => {
    if (videoElement) {
      videoElement.muted = false;
    }
  }, [videoElement]);

  return videoElement ? (
    <>
      <Box position="absolute" w="full" bottom="0">
        <ProgressBar videoElement={videoElement} />
      </Box>
      <Box position="absolute" bottom="6" right="4">
        <SoundSlider
          videoElement={videoElement}
          defaultValue={soundValue}
          onVolumeChange={onVolumeChange}
        />
      </Box>
    </>
  ) : null;
};

export default Interface;
