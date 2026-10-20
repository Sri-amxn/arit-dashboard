// CHECKPOINT 4 — Show a number.            (useState(0), no buttons yet)
// CHECKPOINT 5 — Add handleIncrement.      (onClick on the Add button)
// CHECKPOINT 6 — Add handleReset.          (onClick on the Reset button)
import { useState } from "react";

function ProgressCounter() {
  const [count, setCount] = useState(0);

  // Event handlers: update state, and React re-renders with the new value
  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  return (
    <section className="counter" aria-live="polite">
      <h2>Lessons completed</h2>
      <p className="counter__value">{count}</p>
      <div className="counter__actions">
        <button className="btn btn--primary" onClick={handleIncrement}>
          Add lesson
        </button>
        <button className="btn btn--ghost" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default ProgressCounter;
