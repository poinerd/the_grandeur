import projects from "./projectList"
import github from './assets/github.svg'

export default function Projects(){

 



    return(
        <div id="Projects" className=" flex flex-col bg-[#fbfdffff] p-2 w-full border-1 border-[#EEEEEE] pt-3 pb-10 ">
              <h3 className="border-1 border-black bg-black text-white rounded-xl p-2 inline-block w-fit">PROJECTS 🧩</h3>
              <div className="flex flex-col gap-5 justify-center items-center md:flex-row">
                {projects.map((project)=>{
                    return(
                        <div className="flex flex-col w-[90%] bg-white p-5 rounded-md md:w-[30%] md:wrap shadow-md hover:shadow-lg">
                            <div className="bg-blue-50 h-[9rem]"> here</div>
                            
                            <div className="flex flex-row gap-20 justify-between items-center mt-5"> 
                            <h2>  {project.projectName}</h2>

                             <div className="flex gap-2 justify-center items-center">
        {project.projectLinks.live && (
          <a
            href={project.projectLinks.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium"
          >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
          </a>
        )}

        {project.projectLinks.caseStudy && (
          <a
            href={project.projectLinks.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
          </a>
        )}

        {project.projectLinks.github && (
          <a
            href={project.projectLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 font-medium"
          >
         <img src={github}></img>
          </a>
        )}
      </div> 
                            </div>

                           <p>{project.projectDescription}</p>
                           <div className="flex flex-row ">
                            { project.tags.map((tag)=>{
                                return(
                                    <img src={tag} width={'20rem'}></img>
                                )
                            })}
                           </div>
                      
                        </div>

                 
                    )
                })}
            

              </div>
             


        </div>
      

    )

}