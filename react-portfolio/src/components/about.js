import profilePhoto from '../assets/images/ValbonaBajrami.jpg'

const About = () => {
    return (
        <>
            <h1>About Me</h1>
             <div className="about-me"></div> 
             <div>
          <p>Hey! I'm Valbona.</p>
          <p> 
            text
          </p>
          {/* <hr /> */}
          <p>
           text
          </p>
        </div>
        <img src={profilePhoto} alt="headshot of Val" />
      
    </>


    )
}
export default About;