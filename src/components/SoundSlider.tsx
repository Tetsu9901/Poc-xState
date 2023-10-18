import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useEffect } from "react";

interface Props {
  videoElement: HTMLVideoElement;
  defaultValue?: number;
  onVolumeChange?: (volume: number) => void;
}

export const SoundSlider = ({
  defaultValue = 0,
  videoElement,
  onVolumeChange,
}: Props) => {
  const handleVolume = (newVolume: number) => {
    videoElement.volume = newVolume / 100;

    if (onVolumeChange) {
      onVolumeChange(newVolume);
    }
  };

  useEffect(() => {
    videoElement.volume = defaultValue / 100;
  }, []);

  return (
    <Slider
      defaultValue={defaultValue}
      orientation="vertical"
      minH="32"
      onChange={handleVolume}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
