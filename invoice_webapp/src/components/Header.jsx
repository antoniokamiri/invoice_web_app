import {useState} from 'react';
import useDarkMode from '../hooks/useDarkMode';
import logo from '../assets/logo.png';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';
import {motion} from 'framer-motion';

export default function Header() {

    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(colorTheme === 'dark' ? true : false);
    
    const toggleDarkMode = () => {
        setTheme(colorTheme);
        setDarkSide((oDarkSide) => !oDarkSide);
    };

    const transition = {
        type: "spring",
        stiffness: 200,
        damping: 10
    };



  return (
    <div>
        {/* Header */}
        <header className='lg:hidden h-[80px] z-50 duration-300 ease-in-out p-4 dark:bg-[#1E2139] bg-[#373b53]
         flex items-center justify-end '>

            {/* Logo Img on the left */}
            <img src={logo} alt="Logo Invoice" className='h-[80px] absolute top-0 left-0 rounded-[20%] '/>

            {/* Menu at the center */}

            {/* Toggle and Profile at the right */}
            <div className='flex items-center'>
                {/* toggle button */}
                {
                    colorTheme === "dark" ? 
                    < motion.img onClick={toggleDarkMode} className='cursor-pointer h-6'
                    initial={{ scale: 0.6, rotate: 90 }} 
                    animate={{ scale: 1, rotate: 360, transition }} 
                    whileTap={{ scale: 0.9, rotate: 15 }} 
                    src={moon} />
                    :
                    < motion.img onClick={toggleDarkMode} className='cursor-pointer h-7' 
                    whileTap={{scale: 0.9, rotate: 15}}
                    initial={{rotate: 45}} 
                    animate={{rotate: 360, transition}}
                    src={sun} />

                }
            </div>



        </header>
    </div>
  )
}
