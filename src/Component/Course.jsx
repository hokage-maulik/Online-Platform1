// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import "../Style/Course.css"
// export default function Course() {
//     const[course,setCourse]=useState([])

//     useEffect(()=>{
//         axios.get("http://localhost:8003/course/get")
//         .then((res)=>{
//             setCourse(res.data)
//         }).catch((error)=>{
//             console.log(error)
//         })
//     },[])
//   return (
//     <div>
//         {course.map((el,i)=>{
//             return <li>
//                 <h2>{el.name}</h2>
//                 <p>{el.description}</p>
//                 <Link to={`/lesson/${el._id}`}>
//                 <img src={el.image} alt="" />
                
//                 </Link>
//             </li>
//         })}
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Style/Course.css"


export default function Course() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios.get("https://online-platform-backend.onrender.com/course/get")
            .then((res) => {
                setCourse(res.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="course-container">
            
            <div>
                
                <h1 className="course-title">🚀 Explore Our Courses</h1>

                <div className="course-grid">
                    {course.map((el, i) => (
                        <div key={i} className="course-card">
                            <h2>{el.name}</h2>
                            <p>{el.description}</p>

                            <Link to={`/lesson/${el._id}`}>
                                <img src={el.image} alt={el.name} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
