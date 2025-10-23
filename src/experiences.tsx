
import experiences from './experienceList'

export default function Experiences(){
    
    return(
        <div id="Experiences" className=" flex flex-col bg-[#fbfdffff] p-2 w-full pt-3 pb-10 ">
            <h3 className="border-1 border-black bg-black text-white rounded-xl p-2 inline-block w-fit ">EXPERIENCES 💼</h3>
            <div className="flex flex-col gap-5 justify-center items-center md:flex-row ">
                {experiences.map((experience)=>{
                    return (
                        <div className="flex flex-col w-[90%] bg-white p-5 rounded-md   md:w-fit md:wrap shadow-md hover:shadow-lg">
                            <div className="flex flex-row items-center justify-start bg-[#fff] w-fit rounded-xl" >
                                <img src={experience.logo} width={'100px'}></img>
                            </div>
                            

                            <div className='flex flex-row justify-between gap-3 items-center'>
                            <h2 className='italic'>{experience.role}</h2>
                            <p className='rounded-md bg-blue-200 p-2 md:text-90xl'>{experience.duration}</p>
                            </div>

                            <p>{experience.description}</p>
                          
                            
                            

                        </div>
                    )
                })}
            </div>

            
        </div>
    )
}