
import experiences from './experienceList'

export default function Experiences(){
    
    return(
        <div id="Experiences" className=" flex flex-col bg-blue-100 p-2 w-full ">
            <h3>EXPERIENCES</h3>
            <div className="flex flex-col gap-5 justify-center items-center">
                {experiences.map((experience)=>{
                    return (
                        <div className="flex flex-col w-[80%] bg-white p-5 rounded-xl ">
                            <div className="flex flex-row gap-[2rem] items-center justify-center bg-white" >
                                <img src={experience.logo} width={'180px'}></img>
                            </div>

                            <p>{experience.role}</p>
                            <p>{experience.description}</p>
                            <p className='rounded-xl bg-blue-200 p-1 w-[50%]'>{experience.duration}</p>
                            
                            

                        </div>
                    )
                })}
            </div>

            
        </div>
    )
}