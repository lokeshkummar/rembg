
import { FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Socials = () => {

    const handleClick = (link: string) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const items = [
        {
            id: 1,
            icon: <FaLinkedin />,
            name: "Linkedin",
            link: "https://www.linkedin.com/in/lokesh-kummar/"
        },
        
        {
            id: 2,
            icon: <FaSquareXTwitter />,
            name: "X",
            link: "https://x.com/lokeshkummar"
        },
        {
            id: 3,
            icon: <FaGithubSquare />,
            name: "GitHub",
            link: "https://github.com/lokeshkummar"
        },
        {
            id: 4,
            icon: <ImMail />,
            name: "Email",
            link: "mailto:lokeshkumar.080806@gmail.com"
        },
    ];

    return (
        <div className='mb-2 flex gap-4'>
            {items.map(item => (
                <div 
                    onClick={() => handleClick(item.link)} 
                    className='text-3xl rounded-md cursor-pointer hover:shadow-lg hover:shadow-black-700/100 hover:scale-125' 
                    key={item.id}>
                    {item.icon}
                </div>
            ))}
        </div>
    );
}

export default Socials;