// CHECKPOINT C — state variable completedModules, shown on screen.
// CHECKPOINT D — Complete Module button that never goes above 5.
// CHECKPOINT E — Reset button and the "Day 1 Complete" message.
import { useState } from "react";

const MAX_MODULES = 5;

function ModuleTracker() {
  const [completedModules, setCompletedModules] = useState(0);

  const isComplete = completedModules === MAX_MODULES;

  // Math.min caps the value at 5, even if the handler somehow runs again
  const handleComplete = () =>
    setCompletedModules((current) => Math.min(current + 1, MAX_MODULES));

  const handleReset = () => setCompletedModules(0);

  return (
    <section className="tracker" aria-live="polite">
      <h2>Modules completed</h2>
      <p className="tracker__value">
        {completedModules} / {MAX_MODULES}
      </p>
      {isComplete && <p className="tracker__done">Day 1 Complete</p>}
      <div className="tracker__actions">
        <button
          className="btn btn--primary"
          onClick={handleComplete}
          disabled={isComplete}
        >
          Complete Module
        </button>
        <button className="btn btn--ghost" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default ModuleTracker;