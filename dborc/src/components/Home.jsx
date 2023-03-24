import Navbar from "./Navbar.jsx";
import VantaNet from "../animated-components/VantaNet.jsx";
import Typewriter from 'typewriter-effect';

function Home () {
    return ( 

    <div className="w-[100%] h-[100dvh]">
        <VantaNet styles={"fixed top-0 -z-10"}/>
      <div className="flex flex-col justify-between h-[100dvh]">
        <Navbar />
        <div className=" text-center font-semibold text-white"> 
            <Typewriter
            options={{
                strings: ['Under developemnt', 'Check back soon!'],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 80,
            }}
            />
        </div>
        <div>

        </div>
        
      </div>
    </div>

     );
}

export default Home ;