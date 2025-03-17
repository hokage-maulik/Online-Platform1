// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'

// // export default function Lesson() {
// //     const[lesson,setLesson]=useState([])

// //     useEffect(()=>{
// //         axios.get("http://localhost:8003/lesson/get")
// //         .then((res)=>{
// //             setLesson(res.data)
// //         }).catch((error)=>{
// //             console.log(error)
// //         })
// //     },[])
// //   return (
// //     <div>
// //         {lesson.map((el,i)=>{
// //             return <li>
// //                 <h2>{el.title}</h2>
// //                 <p>{el.time}</p>
// //                 <video src={el.video} controls ></video>

// //             </li>
// //         })}
// //     </div>
// //   )
// // }

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// export default function Lesson() {
//     const [lesson, setLesson] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:8003/lesson/get")
//             .then((res) => {
//                 setLesson(res.data);
//             }).catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <div>
//             {lesson.map((el, i) => (
//                 <li key={i}>
//                     <h2>{el.title}</h2>
                    

//                     <iframe src={el.video} frameborder="0" width="914" height="514"></iframe>
//                     {/* <a href={el.notes}>Notes</a> */}
                    
//                 </li>
//             ))}
//         </div>
//     );
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../Style/Lesson.css"
import { useParams } from 'react-router-dom';
export default function Lesson() {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const {courseId}=useParams()

    useEffect(() => {
        axios.get(`https://online-platform-backend.onrender.com/lesson/get/?courseId=${courseId}`)
            .then((res) => {
                setLessons(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching lessons:", error);
                setLoading(false);
            });
    }, [courseId]);

    return (
        <div className="lesson-container">
            <div>
                <h1 className="lesson-title">📚 Explore Your Lessons</h1>

                {loading ? (
                    <p className="text-center text-white text-lg">Loading lessons...</p>
                ) : (
                    <div className="lesson-grid">
                        {lessons.map((lesson, index) => (
                            <div key={index} className="lesson-card">
                                <h2>{lesson.title}</h2>

                                <div className="lesson-video">
                                    <iframe 
                                        src={lesson.video} 
                                        width="100%" 
                                        height="100%" 
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                {lesson.notes && (
                                    <a 
                                        href={lesson.notes} 
                                        // className="lesson-notes"
                                        // target="_blank" 
                                        // rel="noopener noreferrer"
                                    >
                                        📄 View Notes
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
