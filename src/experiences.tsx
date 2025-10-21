
import experiences from './experienceList'

export default function Experiences(){
    
    return(
        <div id="Experiences" className=" flex flex-col bg-[#fbfdffff] p-2 w-full pt-3 pb-10 ">
            <h3>EXPERIENCES 💼</h3>
            <div className="flex flex-col gap-5 justify-center items-center md:flex-row ">
                {experiences.map((experience)=>{
                    return (
                        <div className="flex flex-col w-[90%] bg-white p-5 rounded-md   md:w-[30%] md:wrap shadow-sm">
                            <div className="flex flex-row gap-[2rem] items-center justify-center bg-blue-50" >
                                <img src={experience.logo} width={'180px'}></img>
                            </div>
                            

                            <div className='flex flex-row justify-between'>
                            <h2 className='italic'>{experience.role}</h2>
                            <p className='rounded-xl'>{experience.duration}</p>
                            </div>

                            <p>{experience.description}</p>
                          
                            
                            

                        </div>
                    )
                })}
            </div>

            
        </div>
    )
}