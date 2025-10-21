import img from './assets/emma.png'
import linkedln from './assets/linkedin.svg'
import dribble from './assets/dribble.svg'
import github from './assets/github.svg'
import twitter from './assets/twitter.svg'







export default function HeroSection(){


// style={
//         // { backgroundImage: `url(${bg})`}
        
//         }



    return(
        <div className=" flex flex-col bg-[#fff] p-10  justify-center items-center text-center " 
     >
            <img src={img} style={{width:'9rem',marginBottom:'1rem'}}></img>
            <h1> <span className='font-md'>Hi, My name is Emmanuel & </span> <br className='italize'/>I love to design and build great products</h1>
             {/* <p> My interest and expetiese spans across product design, brand design and software development</p> */}

             <div className='flex flex-row justify-center items-center gap-3 bg-transparent p-2 rounded'>
                <a><img src={linkedln}></img></a>
                 <a href='https://github.com/poinerd'><img src={github}></img> </a>
                  <a><img src={dribble}></img></a>
                   <a><img src={twitter}></img></a>
                
             </div>
            <div className="flex gap-3 mt-5">       
            <button>Let's Talk</button>

            <button style={{backgroundColor:'#ebebebff', border:'1px solid black', color:'black'}}>
                <a href='https://drive.google.com/file/d/1lvU0gYOHqfiBddebvNfdrmFgrL5V0fBm/view?usp=drive_link'>Read my CV</a>
            </button>
            </div>
      
        </div>
    )

}