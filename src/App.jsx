import Header from "./components/Header"
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DifferencesSection"
import IntroSection from "./components/IntroSection"
import TabSection from "./components/TabSection"
import { useState } from "react"
import FeedBack from "./components/FeedBack"
import EffectSection from "./components/EffectSection"




function App() {

const [visible, setVisible]= useState(true);
const [tab, setTube]= useState('effect');

// setTimeout(()=>{
//   setVisible(false)
// }, 3000)

  return (
    <>
    {visible && <Header />}
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTube(current)}/>
        {tab == 'main' && 
        <>
        <TeachingSection />
        <DifferencesSection/>
        </>}
        {tab == 'feedback' && 
        <>
        <FeedBack/>
        </>}
        {tab == 'effect' && 
        <>
        <EffectSection/>
        </>}
      
      </main>
    </>
  )
}

export default App
