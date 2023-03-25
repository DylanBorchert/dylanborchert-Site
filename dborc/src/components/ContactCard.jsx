import FlipText from "../animated-components/FlipText";
import SlideText from "../animated-components/SlideText";

function ContactCard() {

    const copyToClipboard = (str) => {
        //add text to clipboard
        navigator.clipboard.writeText('dborc610@mtroyal.ca');
        alert('Email Copied to Clipboard');

    }

    const downloadResume = () => {
        //download resume
        document.getElementById('download').click();
    }


    return ( 
        <div className="w-full sm:col-span-2 sm:mt-2 pt-2 border-t-2 border-gray-800 flex sm:flex-row justify-between flex-col">
            <div className="text-white group hover:text-primary-1 transition duration-150 ease-out hover:ease-in shadow-md flex flex-row-reverse mr-auto mb-1 m-0">
                <a href="/DylanBorchertResume.pdf" download id="download" hidden></a>
                <a href="https://drive.google.com/file/d/1BWBM5e5onHtV0kcmTuHcpM6hlUk0eWEN/view?usp=sharing" target="_blank" className="flex">
                    <div className="flex justify-between">
                        <p className="text-sm px-1 text-white text-md my-auto group-hover:text-primary-1">view resume</p>
                    </div>
                </a>
                <svg
                    onClick={downloadResume}
                    className="w-9 h-9 fill-current my-auto text-white hover:text-primary-1 transition duration-150 ease-out hover:ease-in rounded-md p-1 ml-1 hover:cursor-pointer hover:shadow-md border border-spacing-3 border-gray-800 hover:border-primary-1"
                    xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 1024 1024">
                    <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"/>
                </svg>
            </div>
            <div className="text-white group hover:text-primary-1 transition duration-150 ease-out hover:ease-in shadow-md flex sm:flex-row flex-row-reverse mr-auto mt-1 sm:m-0">
                <a href="mailto: dborc610@mtroyal.ca" target="_blank" className="flex">
                    <div className="flex justify-between">
                        <p className="text-sm px-1 text-white text-md font-semibold my-auto group-hover:text-primary-1">dborc610@mtroyal.ca</p>
                    </div>
                </a>
                <svg
                    onClick={copyToClipboard}
                    className="w-9 h-9 fill-current my-auto text-white hover:text-primary-1 transition duration-150 ease-out hover:ease-in rounded-md p-1 ml-1 hover:cursor-pointer hover:shadow-md border border-spacing-3 border-gray-800 hover:border-primary-1"
                    xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z"/>
                    <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/></g>
                </svg>
            </div>
        </div>
     );
}

export default ContactCard;