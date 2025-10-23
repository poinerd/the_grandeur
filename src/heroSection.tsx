import img from './assets/emma.png'
import linkedln from './assets/linkedin.svg'
import dribble from './assets/dribble.svg'
import github from './assets/github.svg'
import twitter from './assets/twitter.svg'


function scrollToSection(id: any) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }



export default function HeroSection() {
  return (
    <div className="relative flex flex-col bg-[#fff] p-10 justify-center items-center text-center overflow-hidden">

      {/* 🌈 Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-br from-yellow-100 via-blue-100 to-white opacity-70 blur-3xl animate-gradientMove"></div>

      <img src={img} style={{ width: '9rem', marginBottom: '1rem' , zIndex:1}} alt="profile" />
      <h1 style={{fontStyle:'bold'}}>
        <span className="font-md">Hi, My name is Emmanuel & </span > <br />
        I love to design and build great products
      </h1>

      <div className="flex flex-row justify-center items-center gap-3 bg-transparent p-2 rounded">
        <a className="icons"><img src={linkedln} alt="LinkedIn" /></a>
        <a className="icons" href="https://github.com/poinerd"><img src={github} alt="GitHub" /></a>
        <a className="icons"><img src={dribble} alt="Dribbble" /></a>
        <a className="icons"><img src={twitter} alt="Twitter" /></a>
      </div>

      <div className="flex gap-3 mt-5">
        <button onClick={() => scrollToSection("contactMe")}>Let's Talk</button>
        <button className='readCV' style={{ backgroundColor: '#f1f1f1ff', border: '1px solid black', color: 'black' }}>
          <a href="https://drive.google.com/file/d/1lvU0gYOHqfiBddebvNfdrmFgrL5V0fBm/view?usp=drive_link">Read my CV</a>
        </button>
      </div>
    </div>
  );
}
