import Button from "./Button/Button"
import { differences } from "../data"
import { useState } from "react"
export default function DifferencesSection () {

    const [contentType, setContentType] = useState(null)

  console.log('App component Render')
  
  function buttonClick(type){
    setContentType(type)
}
    return (
        <section>
        <h3>Чем мы отличаемся</h3>
        <Button isActive={contentType=='way'} onClick={() => buttonClick('way')}> RYJGRF 1</Button>
        <Button isActive={contentType=='easy'} onClick={() => buttonClick('easy')}> RYJGRF 2</Button>
        <Button isActive={contentType=='program'} onClick={() => buttonClick('program')}> RYJGRF 3</Button>
        {contentType && <p>{differences[contentType]}</p>}
        {!contentType && <p>ENTER BUTTON</p>}
      </section>
    )
}