import { NavbarLiProp } from '@/app/types/types';
import Link from 'next/link';

const NavbarLi: React.FC<NavbarLiProp> = ({name, href}) => {
  return (
    <li className=''>
      <Link href={href}> {name} </Link>
    </li>
  )
}

export default NavbarLi;