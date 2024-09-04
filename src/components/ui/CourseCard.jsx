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
      <div>{name}</div>
      <div className="">{instructor}</div>
      <div className="">{description}</div>
      <div className="">{enrollmentStatus}</div>
      <div className="">{duration}</div>
      <div className="">{place}</div>
      <div className="">{requirement}</div>
      <div className="">{schedule}</div>
      <div className="">{syllabus}</div>
    </div>
  );
};
export default CourseCard;
