import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import CourseList from "./components/ui/CourseList";

export default function App() {
  const { name, instructor } = useSelector((state) => state.filter);
  const [courseList, setCourseList] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const courseCollection = collection(db, "Course");

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await getDocs(courseCollection);
        const courses = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setCourseList(courses);
      } catch (err) {
        console.error(err);
      }
    };
    getCourses();
  }, []);

  useEffect(() => {
    const filtered = courseList.filter((course) => {
      const nameMatch = course.name.toLowerCase().includes(name.toLowerCase());
      const instructorMatch = course.instructor.toLowerCase().includes(instructor.toLowerCase());
      return nameMatch && instructorMatch;
    });
    setFilteredCourses(filtered);
  }, [name, instructor, courseList]);

  return (
    <div className="m-12">
      <CourseList courseList={filteredCourses} />
    </div>
  );
}
