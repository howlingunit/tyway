'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import HomeNav from './comps/home_nav'



export default function Home() {
  const [ mounted, setMounted ] = useState(false)
  const [bg, setBg] = useState('') 
  // eslint-disable-next-line
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)

    const imgs = ['B_forrest.jpg', 'B_mountain.jpg', 'B_beach1.jpg', 'B_beach2.jpg', 'B_beach3.jpg', 'B_beach4.jpg', 'B_beach5.jpg', 'D_city.jpg', 'D_city2.jpg']
    // const imgs = ['B_forrest.jpg', 'D_city2.jpg'] // Reduced for testing themes
    const img = `home_imgs/${imgs[Math.floor(Math.random() * imgs.length)]}`
    setBg(img)
    


    if (img[10] === 'B') {
      setTheme('light')
    } else if (img[10] === 'D') {
      setTheme('dark')
    }
  // eslint-disable-next-line
  }, [])

  if (!mounted) {
    return null
  }

  

  
  


  return (
    <div className="w-screen">
      <div className={`bg-cover bg-center w-full h-screen flex flex-col justify-between font-comfortaa`} style={{ backgroundImage: `url(${bg})` }} >

        <div className='w-full justify-start items-center flex flex-col dark:text-white py-5 gap-10'>
          <HomeNav />

          <div className={` md:text-7xl text-5xl flex flex-col text-center pt-10`}>
            <h1 className='tyway1'>TYWAY</h1>
            <h2 className='tyway2'>2.0</h2>
          </div>
        </div>

        <div className='items-center flex flex-col justify-center mb-5 text-3xl animate-bounce user-scroll'>
          <h2>Scroll down for more</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        

        </div>
      </div>


      <div className='w-screen h-screen'>
        <iframe src="https://usernames.tyway.net" className='w-full h-full' ></iframe>
      </div>
    </div>
  )
}
