import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "./config/firebase";
import { Link } from "react-router-dom";

export default function App() {
  const [courseList, setCourseList] = useState([]);

  const courseCollection = collection(db, "Course");
  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await getDocs(courseCollection);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(filteredData);
        setCourseList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getCourses();
  }, []);
  return (
    <div className="">
      {courseList.map((course) => (
        <div key={course?.id} className="p-2 border-2 ">
          <Link
            to={course?.id}
            state={{
              name: course?.name,
              instructor: course?.instructor,
              description: course?.description,
              enrollmentStatus: course?.enrollmentStatus,
              duration: course?.duration,
              location: course?.location,
              requirement: course?.requirement,
              schedule: course?.schedule,
              syllabus: course?.syllabus,
            }}>
            <div>{course?.name}</div>
            <div className="">{course?.instructor}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
