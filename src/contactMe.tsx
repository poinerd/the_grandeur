export default function ContactMe(){
    return(
        <div className=" flex flex-col bg-[#222222ff] p-5 text-white justify-center items-center text-center ">
            <h2>Let’s Connect</h2>
            <p>Got an idea, a role, or a challenge? Let’s talk.</p>
            <div className="flex flex-row gap-2">
                <input placeholder="send a mail" className="bg-white rounded-xl p-2 text-black"></input>
                <button> Send</button>
            </div>

        </div>
    )
}


