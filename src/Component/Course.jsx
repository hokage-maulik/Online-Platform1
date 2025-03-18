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
import '../Style/Course.css';  // Keep your custom styles if needed

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
        <div className="container my-5">
            <h1 className="text-center mb-4">🚀 Explore Our Courses</h1>

            <div className="row">
                {course.map((el, i) => (
                    <div key={i} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img src={el.image} alt={el.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                                <p className="card-text">{el.description}</p>
                                <Link to={`/lesson/${el._id}`} className="btn btn-primary">
                                    View Lesson
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
