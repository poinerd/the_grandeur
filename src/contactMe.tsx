export default function ContactMe(){
    return(
        <div  id="contactMe" className=" flex flex-col bg-[#222222ff] p-5 text-white justify-center items-center text-center ">
            <h2>Let’s Connect</h2>
            <p>Got an idea, a role, or a challenge? Let’s talk.</p>
            <form className="flex flex-col gap-2 contactForm p-9 rounded-lg bg-[#0e0d0dff]" >

                <div>
                <label>Name</label>
                <input placeholder="What's your name?"></input>
                </div>


                <div>
                <label>Email</label>
                <input type="email" placeholder="Enter your email"></input>
                </div>


                <div>
                <label>Message</label>
                <textarea placeholder="send me a message" className="bg-white  p-2 text-black w-fit"></textarea>
                </div>
               
                <button type="submit"> Send</button>
            </form>

        </div>
    )
}


