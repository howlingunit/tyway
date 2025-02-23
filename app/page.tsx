'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


export default function Home() {
  const [ mounted, setMounted ] = useState(false)
  const [bg, setBg] = useState('') 
  // eslint-disable-next-line
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)

    const imgs = ['B_forrest.jpg', 'B_mountain.jpg', 'B_beach1.jpg', 'B_beach2.jpg', 'B_beach3.jpg', 'B_beach4.jpg', 'B_beach5.jpg', 'D_city.jpg', 'D_city2.jpg']
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
    <div className="h-screen w-screen">
      <div className={`bg-cover bg-center h-full w-full flex justify-start flex-col dark:text-white`} style={{ backgroundImage: `url(${bg})` }} >
        <div className={`font-comfortaa text-7xl flex flex-col items-center`}>
          <h1 className='font-comfortaa'>TYWAY</h1>
          <h2 >2.0</h2>
        </div>
      </div>
    </div>
  )
}
