import type { Dispatch, SetStateAction } from "react";
import type { SolverOptions } from "#/utils/solver/skewbSolver";

export default function SolverOptionsView({
    options,
    setOptions,
}: {
    options: SolverOptions;
    setOptions: Dispatch<SetStateAction<SolverOptions>>;
}) {
    return (
        <div>
            <h2 className="mb-3 text-2xl font-semibold text-(--sea-ink)">
                Options
            </h2>
            <div className={`mb-2`}>
                <input
                    autoComplete="off"
                    type="checkbox"
                    id="startSolvingImmediately"
                    checked={options.startSolvingImmediately}
                    onChange={(e) =>
                        setOptions((o) => ({
                            ...o,
                            startSolvingImmediately: e.target.checked,
                        }))
                    }
                    className="mr-1"
                />
                <label htmlFor="startSolvingImmediately">
                    Start solving immediately after setting state
                </label>
            </div>
        </div>
    );
}
