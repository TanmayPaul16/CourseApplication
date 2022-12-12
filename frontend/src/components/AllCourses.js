import React, { useState, useEffect } from 'react';
import Course from "./Course";
import base_url from '../api/bootapi';
import axios from "axios";
import { toast } from 'react-toastify';


const Allcourse=()=>{

    useEffect(() => {
        document.title= "AllCourses";
    }, []);


    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    };

    //function to call server:
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                // console.log(response);
                console.log(response.data);
                toast.success("courses has been loaded");
                setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);

    const [courses,setCourses]=useState([]);

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {courses.length > 0
                ? courses.map((item) => <Course key={item.id} course={item} 
                update={updateCourses} />)
                : "No courses"}

        </div>
    );
};
export default Allcourse;