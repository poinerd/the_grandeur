export default function NavBar(){
    return(
        <div className="flex flex-row p-5 justify-between items-center  gap-2">
            <h2>TheGrandeur</h2>
            <div className="flex flex-row gap-10 justify-between items-center">
                   <button className="bg-blue-400 p-2">let's Talk</button>
            <li className="flex flex-row gap-4 hidden md:flex">
                <ul>Projects</ul>
                <ul>Experience</ul>
                <ul>About</ul>  
            </li>
            </div>

            <button className="md:hidden" style={{backgroundColor: 'transparent', padding:'1rem'}}> 
                <svg style= {{ color:"black"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </button>
         
       
        </div>
    )
}