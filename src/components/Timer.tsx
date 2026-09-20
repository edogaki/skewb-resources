import { useEffect, useReducer, useRef, useState } from "react";

type TimerState =
    | {
          stateString: "initial";
      }
    | {
          stateString: "running";
          timeStarted: number;
      }
    | {
          stateString: "stopped";
          timeStarted: number;
          timeStopped: number;
      };

type Action =
    | {
          type: "initialize";
      }
    | {
          type: "start" | "stop";
          timeOfAction: number;
      };

function reducer(state: TimerState, action: Action): TimerState {
    switch (action.type) {
        case "start":
            return {
                stateString: "running",
                timeStarted: action.timeOfAction,
            };
        case "stop":
            if (state.stateString !== "running") return state;
            return {
                ...state,
                stateString: "stopped",
                timeStopped: action.timeOfAction,
            };
        case "initialize":
            return {
                stateString: "initial",
            };
    }
}

export default function Timer() {
    const [state, dispatch] = useReducer(reducer, {
        stateString: "initial",
    });

    const [_lastUpdated, setLastUpdated] = useState(0);
    useEffect(() => {
        if (state.stateString === "running") {
            function keepUpdating() {
                setLastUpdated(Date.now());
            }
            const id = setInterval(keepUpdating, 16);
            return () => clearInterval(id);
        }
    }, [state.stateString]);
    const time = Date.now();

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!buttonRef.current) return;
        buttonRef.current.addEventListener(
            "keydown",
            (event: KeyboardEvent) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                }
            },
        );
    }, []);
    return (
        <div className="flex gap-2 items-center">
            <div className="font-mono">
                {(state.stateString === "running"
                    ? (time - state.timeStarted) / 1000
                    : state.stateString === "stopped"
                      ? (state.timeStopped - state.timeStarted) / 1000
                      : 0
                ).toFixed(3)}{" "}
                seconds
            </div>
            <button
                type="button"
                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50"
                ref={buttonRef}
                onClick={() =>
                    dispatch(
                        state.stateString === "initial"
                            ? { type: "start", timeOfAction: Date.now() }
                            : state.stateString === "running"
                              ? { type: "stop", timeOfAction: Date.now() }
                              : { type: "initialize" },
                    )
                }
            >
                {state.stateString === "initial"
                    ? "Play"
                    : state.stateString === "running"
                      ? "Stop"
                      : "Restart"}
            </button>
        </div>
    );
}
