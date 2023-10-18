import React from "react";
import { useMachine } from "@xstate/react";
import { Box } from "@chakra-ui/react";

import video from "./assets/pursuit-of-happiness.mp4";
import ad from "./assets/ad_countdown.mp4";
import { playerMachine } from "./player.fsm";
import Splashscreen from "./components/Splashscreen";
import Interface from "./components/Interface";

const Player = () => {
  // Récupération de la machine à état
  const [playerState, playerSendEvent] = useMachine(playerMachine, {
    devTools: true,
  });

  // Récupération de la balise video
  const [videoElement, setVideoElement] = React.useState<HTMLVideoElement>();

  // Réactions aux changements d'états
  React.useEffect(() => {
    if (!videoElement) return;

    if (playerState.matches("content")) {
      if (playerState.matches("content.video.paused")) {
        videoElement.pause();
      }
      if (playerState.matches("content.video.playing")) {
        videoElement.play();
      }
    }
    if (playerState.matches("ad")) {
      if (playerState.matches("ad.video.paused")) {
        videoElement.pause();
      }

      if (playerState.matches("ad.video.playing")) {
        videoElement.play();
      }
    }
  }, [playerState]);

  if (playerState.matches("splashscreen")) {
    return <Splashscreen />;
  }
  // Rendu visuel
  return (
    <Box
      position="relative"
      onMouseOver={() => {
        playerSendEvent("SHOW");
      }}
      onMouseLeave={() => {
        playerSendEvent("HIDE");
      }}
    >
      <video
        style={{
          height: "50vh",
        }}
        loop={false}
        ref={(videoElement) =>
          setVideoElement(videoElement as HTMLVideoElement)
        }
        {...(playerState.matches("content") ? { src: video } : { src: ad })}
        onClick={() => {
          if (playerState.matches("content")) {
            if (playerState.matches("content.video.playing")) {
              playerSendEvent("PAUSE");
            }
            if (playerState.matches("content.video.paused")) {
              playerSendEvent("PLAY");
            }
          }
          if (playerState.matches("ad")) {
            if (playerState.matches("ad.video.playing")) {
              playerSendEvent("PAUSE");
            }
            if (playerState.matches("ad.video.paused")) {
              playerSendEvent("PLAY");
            }
          }
        }}
        onEnded={() => {
          if (playerState.matches("ad")) {
            playerSendEvent("AD_END");
          }
        }}
      ></video>

      {(playerState.matches("content.interface.visible") && (
        <Interface
          videoElement={videoElement}
          soundValue={playerState.context.volume}
          onVolumeChange={(newVolume) => {
            console.log(newVolume);
            playerSendEvent({ type: "SET_VOLUME", volume: newVolume });
          }}
        />
      )) ||
        (playerState.matches("ad.interface.visible") && (
          <Interface
            videoElement={videoElement}
            soundValue={playerState.context.volume}
            onVolumeChange={(newVolume) => {
              console.log(newVolume);
              playerSendEvent({ type: "SET_VOLUME", volume: newVolume });
            }}
          />
        ))}
    </Box>
  );
};

export default Player;
