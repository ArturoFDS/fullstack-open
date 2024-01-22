import Content from "../components/Content";

const Course = ({ course }) => {
  return (
    <div>
      <div>
        <main>
          <Content courses={course.map((parts) => parts)} />
        </main>
      </div>
    </div>
  );
};

export default Course;
