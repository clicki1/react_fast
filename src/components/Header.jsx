import { useEffect, useState } from 'react'
import logo from '/logo-name.svg'

export default function Header() {
   // const now = new Date()    

    const [now, setNow] = useState(new Date()) 

    useEffect(() =>{
      const interval = setInterval(()=>setNow(new Date()), 1000)

      return () => {
        clearInterval(interval)
        console.log('cleaning...')
      }
    },
    [])
    
    
    return (
      <header>
        <img src={ logo } alt={'Result'} />
          {/* <h1>HEADER</h1> */}
          <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
  }