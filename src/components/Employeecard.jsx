// CHECKPOINT A — Props in, JSX out, plus ONE conditional expression.
function EmployeeCard({ name, department, location, skill, yearsExperience }) {

  const role = yearsExperience >= 5 ? "Mentor" : "Learner";   // The conditional (ternary) expression: 5+ years => Mentor, otherwise Learner

  return (
    <article className="employee">
      <div className="employee__top">
        <h3>{name}</h3>
        <span className="role">{role}</span>
      </div>
      <dl className="employee__details">
        <dt>Department</dt>
        <dd>{department}</dd>
        <dt>Location</dt>
        <dd>{location}</dd>
        <dt>Skill</dt>
        <dd>{skill}</dd>
      </dl>
    </article>
  );
}

export default EmployeeCard;