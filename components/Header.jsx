import { Link } from 'next/link';
// import { Button } from '@/components/ui/button'

const Header = () => {
    return (
        <header>
            <div>
                {/* <img src="" alt="" /> */}
            </div>
            <nav>
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                </ul>
            </nav>
            {/* <Button>Get started</Button> */}
        </header>
    );
}

export default Header;