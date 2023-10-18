import { Progress } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  onClick?: (timecode: number) => void;
  videoElement: HTMLVideoElement;
};

export const ProgressBar = ({ videoElement, onClick }: Props) => {
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoElement) return;

    const intervalId = setInterval(() => {
      const computedCurrentTime = videoElement
        ? (videoElement.currentTime / videoElement.duration) * 100
        : 0;

      setProgress(computedCurrentTime);
    }, 150);

    return () => {
      clearInterval(intervalId);
    };
  }, [videoElement]);

  if (!videoElement) return null;

  return (
    <div ref={progressBarRef}>
      <Progress
        onClick={(event) => {
          if (!progressBarRef.current) return null;

          const progressBarContainer =
            progressBarRef.current?.firstElementChild;

          const containerWidth = progressBarContainer?.clientWidth || 1;
          const percentage = event.nativeEvent.offsetX / containerWidth;
          const newTimeCode = videoElement.duration * percentage;

          if (onClick) {
            onClick(newTimeCode);
          }
        }}
        colorScheme="green"
        size="sm"
        value={progress}
        transition="all 2s ease"
        sx={{
          "& > div:first-of-type": {
            transitionProperty: "width",
          },
        }}
      />
    </div>
  );
};
