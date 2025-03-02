import Link from 'next/link'

export default function HomeNav() {
  return(
    <nav className='w-full font-comfortaa md:text-3xl text-2xl'>
      <ul className='flex w-full justify-around'>
        <Link href={'/apps'}><li className='hover:border-black dark:hover:border-white border-transparent border-b-2 transition-all'>APP</li></Link>
        <Link href={'/log'}><li className='hover:border-black dark:hover:border-white border-transparent border-b-2 transition-all'>LOG</li></Link>
        <Link href={'https://github.com/howlingunit'} className='hover:border-black dark:hover:border-white border-transparent border-b-2 transition-all'><li>GITHUB</li></Link>
        <Link href={'/about'} className='hover:border-black dark:hover:border-white border-transparent border-b-2 transition-all'><li>ABOUT</li></Link>

      </ul>
    </nav>
  )
}