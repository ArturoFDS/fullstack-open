/* eslint-disable react/prop-types */

import Part from "./parts/Part";

const Content = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      <Part key={courses.map((part) => part.id)} courses={courses} />
    </div>
  );
};

export default Content;
