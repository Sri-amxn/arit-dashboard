import Header from "./components/Header.jsx";
import CourseCard from "./components/CourseCard.jsx";
import ProgressCounter from "./components/ProgressCounter.jsx";
import EmployeeCard from "./components/Employeecard.jsx";
import ModuleTracker from "./components/Moduletracker.jsx";

const courses = [
  { id: 1, title: "JSX Basics", level: "Foundation", duration: "45 min" },
  { id: 2, title: "Reusable Components", level: "Foundation", duration: "60 min" },
  { id: 3, title: "Events and State", level: "Intermediate", duration: "60 min" },
];

const employees = [
  { id: 1, name: "Ujjawal ", department: "Engineering", location: "Delhi", skill: "React", yearsExperience: 7 },
  { id: 2, name: "Joy", department: "Design", location: "Jodhpur", skill: "UI Prototyping", yearsExperience: 10 },
  { id: 3, name: "Udit", department: "Data", location: "Jodhpur", skill: "SQL & Analytics", yearsExperience: 8 },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <ModuleTracker />
        <ProgressCounter />

        <h2 className="section-title">Your team</h2>
        <div className="grid">
          {employees.map((e) => (
            <EmployeeCard
              key={e.id}
              name={e.name}
              department={e.department}
              location={e.location}
              skill={e.skill}
              yearsExperience={e.yearsExperience}
            />
          ))}
        </div>

        <h2 className="section-title">Your courses</h2>
        <div className="grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              level={course.level}
              duration={course.duration}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;