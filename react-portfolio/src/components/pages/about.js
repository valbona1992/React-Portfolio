import profilePhoto from '../../assets/images/ValbonaBajrami.jpg'
import resume from "../../assets/resume/Valbona_Bajrami_Resume.pdf"

const About = () => {
    return (

<>
    <main className="container">
        <div className="row aboutpage m-5">
           
            <div className="col-12 col-md-6 ml-5 ">
                <h1 className="display-4 text-primary"> Hey! <span className="text-danger fw-bold"> I'm Valbona. </span></h1>
                <h6 className="text-info mt-3"> Full-stack Developer</h6>
                <h6 className="text-info"> Naturopathic Doctor & Acupuncturist</h6>
                <h5 className="text-muted mt-3 "> 
                         For the past few years, I have been investing my time in pursuing my passions in healthcare as a
                        naturopathic doctor and acupuncturist. My love for medicine led me to the tech-world as I noticed a
                        gap with healthcare professionals not being able to provide services and education because of the
                        lack of web designs for the medical field. I plan to use the knowledge I have learned as a
                        full-stack developer to help bridge the gap in medicine and tech. Outside of my professional life, my hobbies including hiking, camping, reading, and traveling the world.</h5> 
            <a href="../portfolio" className="btn btn-primary btn-md mt-3">Projects</a>
            <a href={resume} className="btn btn-primary btn-md mt-3" target="_blank" rel="noreferrer">Resume</a>
            </div>

            <div className="col-12 col-md-5 about">
                 <img className=" img-fluid mt-2  rounded-circle" alt="headshot of Valbona Bajrami" src={profilePhoto}/> 
            </div>
        </div>
    </main>
    
   
    </>
    )
}
export default About;