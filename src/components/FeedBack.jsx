import { useState, useRef } from "react";
import Button from "./Button/Button";


function StateVsRef(){
    const input = useRef()
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)

    function handleKeyDown(event){
        if(event.key === 'Enter'){
            setShow(true)
        }
    }
    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input 
            ref={input}
            type="text" 
            onKeyDown={handleKeyDown}
            className="control" />
        </div>
    )
}

export default function FeedBack() {

    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('help')
    // const [hasError, setHasError] = useState(true)

    const [form, setForm] = useState({
        name: '',
        reason: 'help',
        hasError: true,
    })

    function changeName(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm((prev) => ({
            ...prev,
            name:event.target.value,
            hasError:(event.target.value.trim().length === 0),
        }))
    }

    function toggleError() {
     //   setHasError(hasError => !hasError)
    }
    return (
        <section>
            <h3>Обратная связь</h3>
            <Button onClick={toggleError}>Toggle Error</Button>
            <p>Name: {form.name}</p>
            <p>reason: {form.reason}</p>
            <form action="">
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" style={{border: form.hasError ? "1px solid red" : null}} className="control" value={form.name} onChange={changeName}/>
                <label htmlFor="reason">Причина обращения</label>
                <select name="reason" id="reason" className="control" value={form.reason} onChange={(e) => setForm((prev) => ({...prev, reason : e.target.value}))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
              
                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
            <StateVsRef/>
        </section>
    )
}