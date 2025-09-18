import Image from 'next/image'
import logo from '../assets/logo.jpeg'

const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 200;

const Header = () => {
    return (
        <header className="relative">
            <Image
                priority
                src={logo}
                alt="Logo"
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                className="w-50 h-50 relative top-[40px]"
            />
        </header>
    )
}

export default Header