import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'
import { Link } from 'react-router-dom'


const sun = (
    <div className="w-10 h-10 flex items-center justify-center">
        <FontAwesomeIcon icon={faSun} size='xl' className='text-white' />
    </div>
);

const moon = (
    <div className="w-10 h-10 flex items-center justify-center">
        <FontAwesomeIcon icon={faMoon} size='xl' className='text-black' />
    </div>
);

function Navbar({ darkMode, setDarkMode }) {


    const handleClick = () => {
        setDarkMode(!darkMode);

        console.log('Dark mode is:', darkMode);
    }



    return (
        <>
            <div className='font-bold text-xl text-primary dark:text-tertiary w-full h-25 bg-quaternary dark:bg-primary flex items-center justify-between px-8 sm:px-16'>

                <img src='/src/assets/file-6uCkhE63bwktk3y2ExVdS4.png' alt='Logo not found' width="100" height="100" loading='eager'></img>

                <div className='flex items-center'>
                    <Link to="/" className='mx-2 sm:mx-4'>Home</Link>
                    <Link to="/about" className='mx-2 sm:mx-4'>About</Link>
                    <Link to="/projects" className='mx-2 sm:mx-4'>Projects</Link>
                </div>
                <Button handleClick={handleClick} icon={darkMode ? moon : sun} styling='hover:bg-primary dark:hover:bg-primary rounded-full' />
            </div>
        </>
    );
}

export default Navbar;