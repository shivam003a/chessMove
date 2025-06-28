import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-primary">
            <footer className='max-w-[1200px] mx-auto flex flex-col items-center justify-center py-8'>
                <p className='font-poppins text-white text-sm'>&copy; {new Date()?.getFullYear()} chessMove. All rights reserved.</p>
                <div className='flex mt-4 gap-5'>
                    <Link to="https://instagram.com/shivam003a" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={22} color='#E1306C' />
                    </Link>
                    <Link to="https://x.com/shivam003a" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={22} color='#1DA1F2' />
                    </Link>
                    <Link to="https://linkedin.com/in/shivam003a" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={22} color='#0077B5' />
                    </Link>
                    <Link to="https://github.com/shivam003a" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={22} color='#333333' />
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;