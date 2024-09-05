import { useLocation } from "react-router-dom";

const CourseCard = () => {
  const location = useLocation();
  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    duration,
    place,
    requirement,
    schedule,
    syllabus,
  } = location.state;

  return (
    <div className="border-2 p-2 bg-gray-300">
      <div>Name of the course{name}</div>
      <div className="">Instructor name: {instructor}</div>
      <div className="">Description about the course:{description}</div>
      <div className="">Status:{enrollmentStatus}</div>
      <div className="">Duration{duration}min</div>
      <div className="">Location:{place}</div>
      <div className="">Prerequisite:{requirement}</div>
      <div className="">Schedule:{schedule}</div>
      <div className="">Syllabus:{syllabus}</div>
    </div>
  );
};
export default CourseCard;
