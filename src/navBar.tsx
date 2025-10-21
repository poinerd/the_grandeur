import { useState } from "react"


export default function NavBar(){

    const [ismenu, setMenu] = useState(true)

    function toogleMenu(){
        console.log('hello there')
        setMenu(!ismenu)
    }

    function scrollToSection(id: any) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }



    return(
        <div className="flex flex-row p-5 justify-between items-center  gap-2 relative">
            <h2>TheGrandeur</h2>
            <div className="flex flex-row gap-10 justify-between items-center">
                   <button className="bg-blue-400 p-2">let's Talk</button>
            <li className="flex flex-row gap-4 hidden md:flex">
                <ul onClick={() => scrollToSection("Projects")}>Projects</ul>
                <ul onClick={() => scrollToSection("Experiences")}>Experience</ul>
                <ul onClick={() => scrollToSection("About")}>About</ul>  
            </li>
            </div>

            <button onClick={toogleMenu}  className="md:hidden" style={{backgroundColor: 'transparent', padding:'1rem'}}> 
                <svg style= {{ color:"black"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </button>

          <li  className={`absolute top-24 right-0 p-10 bg-white list-none 
  ${ismenu ? 'block' : 'hidden'} 
  md:hidden`}>
            <ul  onClick={() => scrollToSection("Projects")}>Projects</ul>
            <ul onClick={() => scrollToSection("Experiences")}>Expereince</ul>
            <ul onClick={() => scrollToSection("About")}>About</ul>
          </li>
         
       
        </div>
    )
}