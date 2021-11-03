import projects from '../projects.json';

const Portfolio = () => {

    return (
      <>
        <div class=" projects">
            <h1 class="display-4 text-primary text-center">  Projects </h1>
            <h5 class="text-info text-center"> Check out the projects I have worked on.</h5>
        </div>
       
        {projects.map((project) => (
        <div className="row m-5">
            <div className="col-12 col-md-5 about">
            <img key={project.id} className="homeimg img-fluid" alt="screenshot of project" src={require('../assets/images/' + project.image + '.png').default}/>
            </div>
            <div className="col-12 col-md-6 ml-5 ">
                <h1 className="text-danger"> {project.name}</h1>
                <h4 className="text-muted mt-3 "> 
                {project.description}</h4>
                    <p> <a href={project.pageUrl} className="btn btn-primary  mt-3"> Link</a> 
                    <a href= {project.githubUrl} className="btn btn-primary mt-3"> GitHub</a></p>
            </div>
        </div>
        ))};

    </>
    )
  }
  
  export default Portfolio;