import profilePhoto from '../assets/images/ValbonaBajrami.jpg'

const About = () => {
    return (

<>
    <main className="container">
        <div className="row aboutpage m-5">
            <div className="col-12 col-md-5 about">
            <img className=" img-fluid mt-5" alt="headshot of Valbona Bajrami" src={profilePhoto}/> 
            </div>
            <div className="col-12 col-md-6 ml-5 ">
                <h1 className="display-4 text-primary"> About <span className="text-danger fw-bold"> Me </span></h1>
                <h5 className="text-muted mt-3 "> 
                         For the past few years, I have been investing my time in pursuing my passions in healthcare as a
                        naturopathic doctor and acupuncturist. My love for medicine led me to the tech-world as I noticed a
                        gap with healthcare professionals not being able to provide services and education because of the
                        lack of web designs for the medical field. I plan to use the knowledge I have learned as a
                        full-stack developer to help bridge the gap in medicine and tech. Outside of my professional life, my hobbies including hiking, camping, reading, and traveling the world.</h5> 
            </div>
        </div>
    </main>
    
   
    </>
    )
}
export default About;