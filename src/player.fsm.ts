import { createMachine } from "xstate";

export const playerMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcA2BDAnmATgOljXVgAtYBjHMMAOwGIAPWAF3WbD3QDN2cAKAMwAGEQEo6RbPkIZSFKrQDaQgLqIUAe1gBLZto011IBogDsADnN4ArEIAsAJgCMAhwICc59+4A0ITIiWVnbm1gJh1gBs1qbW7tYAvgl+kricEHgAbtoQYBp0AIIAIgD6AKIAckXKakggyFq6+oZ1JghOTkIOeB5CkabuAqYCLhZ+AQjmTjYiIqad5gORdnZJKRhS6Vk5eXjI6ACusJB0AAoAMgUAmjVGDTp6BkZt8UJ4fQ7WnSueXZHjiEiTlMeDsYQcXXm9k8a3qGzS6Ay2VyGj2G20NCgZwKAFUAMplW51e5NJ6tRCDdx4CwuToWTyOJwAhCRfp4eKuIYOLzmRwCWGpfCIvAY3hcdDkDjZHQAI1QYDoAAkAJJFQmqO6NR4tUAvITTNwrITWPmmIQCOzMgSLanmhzLdyRc2mUyrZJwrAIjKi3DiyXbWXyugEgAqJQAagB5c44gCy6tqmgezWeFPcdhsTiikXCcQc7ntVrsb0++tcbm5TgcdkiAvhQu9NDFEo4JByuXoeMVkYA6kSk6SdcZAl48FnIty+Q5TJ9mXZrXgIa5IuYBBbRqZa+7BXhyAZ2E3tijCqU8SGCgAlEP9+palPkhAxN7mSt9HPW-MCZlA6yg8HRR1bBNJw609fA9ybWhmCPXZ9iOE4LmuG8SW1VMEENW0RntM1wgce0v38QFoj-ZdbErDxQM2CCD2g5FYPRTFsXxBNNWTMldUQDCcKrfpzWsPCc2-JwMw5Nx7BCAYQkotJqKgkVIJwP1W3bWhg27PsNWJO92OHdDwh6edhhiYQ7EGUI5wXJdnA6Nx3BEdxpPA-c5J9RSWwDbQ5QVUMI2jOMWK0tihzaC03m4rNjTNH8ixLWwhHMLo3FsHNHN3ZzD1cpSPK8pVVQCgdUIfasQUZVcgWBV13GGK0bW4zcTTBKJYiSd0aA0XJ4GJetWMHNCAFo8OZPrf28bxV0cCEnTXBzt3rAgiDkShqCHFD7w4hBDJsKqXzsWIYjs3xCIQeJuhdV0QjI+wnC3dYwPSHrCvW-oqSmT5p0iTxbEWZlrt-UtgXirxlnMVLhTojQHrW3SZxBV7+M3T74tMZkvmmHDuWGToPpEflZrusGdlRODjggSGdLaTovnZIZbE3bkpn4797XeARojsJwErNawTVBpFCbRLAMSgMngrMWI8Dh97Ee+o64ipKzXBEVcnBm27NmFTKWxFtDhm6IRBgsKYc2E-NmTe6lbFpXl7SmEC8fVxtm39aVPPlbWH06Zx2SdKqVhXZYVzndnFzteGRgtOJefkp3lIgDt3fWiw3n1oZLGukZHEOiZ5zeIFvBcHNdssMJUtkpsE90wsjt+xc4vcFx9pNNxS-S2jCYrtpXRRjpMIhYt4hB+2ZNbmCicOEmO8QKsHCZ6ZzWiD6TQiZwW8gw9wYFzAhcnhALUiCW4mLfpjNCcwUe8EPOQheKRlVj0qJHzXJR3ixF1ejnQnmLwq4mc3YhEfiIx9aLAtKvGi0dfTuTbHHWgO8eJvyrB-GIHMCz-COjnPAedFhAxVsCQeath5r2gk-KU2hAxgB3qzKwwleQ1hdGWKYQcDR2g6FWXo+sWoJCAA */
  id: "player",
  initial: "splashscreen",
  context: {
    volume: 0,
  },
  states: {
    splashscreen: {
      after: { 3000: "ad" },
    },

    ad: {
      type: "parallel",
      states: {
        video: {
          initial: "paused",
          states: {
            paused: {
              on: {
                PLAY: "playing",
              },
            },

            playing: {
              entry() {
                console.log(">>> Entry");
              },
              exit() {
                console.log(">>> Exit");
              },
              on: {
                PAUSE: "paused",
              },
            },
          },

          on: {
            AD_END: "#player.content.video",
          },
        },
        interface: {
          initial: "hidden",
          states: {
            visible: {
              on: {
                HIDE: "hidden",
                SET_VOLUME: {
                  actions(context, event) {
                    context.volume = event.volume;
                  },
                },
              },
            },
            hidden: {
              on: {
                SHOW: "visible",
              },
            },
          },
        },
      },
    },

    content: {
      type: "parallel",
      states: {
        video: {
          initial: "paused",
          states: {
            paused: {
              on: {
                PLAY: "playing",
              },
            },

            playing: {
              entry() {
                console.log(">>> Entry");
              },
              exit() {
                console.log(">>> Exit");
              },
              on: {
                PAUSE: "paused",
              },
            },
          },

          on: {
            AD_START: "#player.ad.video",
          },
        },

        interface: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW: "visible",
              },
            },
            visible: {
              on: {
                SET_VOLUME: {
                  actions(context, event) {
                    context.volume = event.volume;
                    console.log("volume", context.volume);
                  },
                },
                HIDE: "hidden",
              },
            },
          },
        },
      },
    },
  },
});
