import resume from "../assets/resume/Valbona_Bajrami_Resume.pdf";

const Resume = () => {
    return (
        <>
        <div class=" projects">
            <h1 class="display-4 text-primary text-center">  Resume </h1>
            <h5 class="text-info text-center"> Download my resume 
            <a href={resume} download> here
              <span className="icon icon-download" aria-label="download icon"></span>
            </a></h5>
            <iframe
          src={resume}
          allow="autoplay"
          title="Valbona's Resume"
        ></iframe>
        </div>

        </>



        )
        }

        export default Resume;