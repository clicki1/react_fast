import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useinput";
export default function EffectSection(){
    const input = useInput()

    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    async function fetchUsers(){
        setLoading(true)
        const response = await fetch('https://api.oneunion.ru/api/users')
        const users = await response.json()
        console.log(users.message)
        setUsers(users.message)
        setLoading(false)
    }

    useEffect(()=>{
        fetchUsers()
    },[])
   
    return (
        <section>
            <h1>Effict</h1>
            <Button onClick={() => setModal(true)}>Открыть информацию</Button>
            <Modal open={modal} >
                <h3>Hello from modal</h3>
                <p>Lorem m possimus sint sapiente, reiciendis voluptatum!</p>
                <Button onClick={() => setModal(false)}>Close</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                <input type="text" className="control" {...input}/>
                <h6>{input.value}</h6>
            <ul>
                {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map((user) => (
                    <li key={user.id}>{user.name}</li>
                    ))}
            </ul>
            </>
            )}
        </section>
    )
}