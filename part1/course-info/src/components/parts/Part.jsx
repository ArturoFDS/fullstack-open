import TotalExercises from "../Total";

const Part1 = ({ courses }) => {
  // console.log(part);
  console.log(courses)
  return (
    <div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {courses.map((course) => (
          <div key={course.id}>
            <h1>{course.name}</h1>
            <ul>
              {course.parts.map((part) => (
                <li key={part.id}>
                  {part.name}: <strong>{part.exercises}</strong>
                </li>
              ))}
              <li>Total parts: <TotalExercises courseID={course.id} parts={course.parts.map((el) => el)}/></li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Part1;
