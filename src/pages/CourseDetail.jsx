/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { courseState } from "../courseState";



const CourseDetail = () => {
    const history = useLocation();
    // console.log(history.pathname)
    const url = history.pathname;
    const [courses, setCourses] = useState(courseState);

    const [course, setCourse] = useState(null)

    useEffect(() => {
        const currentCourse = courses.filter((item) => item.url === url);
        setCourse(currentCourse[0])
    }, [courses, url])

    console.log(course)
    return (
        <>
        {course && (
        <Details>
            <Header>
               <h2>{course.title}</h2>
               <img src={course.mainImg} alt="laptop" />
            </Header>
            <Awards>
                {course.awards.map((award) => (
                     <Award title={award.title} description={award.description} key={award.title}/>
                ))}
            </Awards>
            <ImageDisplay>
                <img src={course.secondaryImg} alt="developer" />
            </ImageDisplay>
        </Details>
        
        )}
        </>
    )
}

const Details = styled.div`
color:#fff;
`;
const Header = styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}
img{
    width: 100%;
    height: 100vh;
    /* object-fit: cover; */
}
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem 10rem;
    /* text-align: center; */

`;
const StyledAward = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        height: 0.1rem;
        background-color: #ff80ed;
        width: 100%;
        margin: 1rem 0rem;
    }
    p{
        padding: 1.5 0rem;
    }
`
const ImageDisplay = styled.div`
    img{
        width: 100%;
        height: 100vh;
    }
`;
const Award = ({title, description}) => {
    return <StyledAward>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
    </StyledAward>
}

export default CourseDetail;