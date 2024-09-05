import { Link } from "react-router-dom";

const CourseList = ({ courseList }) => {
  return (
    <div className="flex flex-wrap gap-4 ">
      {courseList.map((course) => (
        <Link
          key={course.id}
          to={`/${course.id}`}
          state={{
            name: course.name,
            instructor: course.instructor,
            description: course.description,
            enrollmentStatus: course.enrollmentStatus,
            duration: course.duration,
            place: course.location,
            requirement: course.requirement,
            schedule: course.schedule,
            syllabus: course.syllabus,
          }}>
          <div className="bg-gray-300 p-5 rounded-lg ">
            <div className="text-xl font-bold">{course.name}</div>
            <div className="text-sm">{course.instructor}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
