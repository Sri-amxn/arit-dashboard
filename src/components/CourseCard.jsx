// CHECKPOINT 3 — Props in, JSX out. Curly braces {} embed JS expressions.
function CourseCard({ title, level, duration }) {
  // JSX expression: pick a CSS modifier class from the level prop
  const levelClass = `badge badge--${level.toLowerCase()}`;

  return (
    <article className="card">
      <h3>{title}</h3>
      <span className={levelClass}>{level}</span>
      <p className="card__duration">Duration: {duration}</p>
    </article>
  );
}

export default CourseCard;
