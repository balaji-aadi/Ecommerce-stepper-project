import React, { useEffect, useRef, useState } from 'react'
import './notification.css'

const Notification = () => {
    const [open, setOpen] = useState(false)
    const modular = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            console.log(e.target)
            if (!modular?.current?.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)

        return function () {
            document.removeEventListener("mousedown", handler)
        }

    }, [modular, setOpen])

    return (
        <header className='notify__header'>
            <main className='notify__main'>
                <div className='notify__details' ref={modular}>
                    <span onClick={() => setOpen(!open)} >Notifications</span>
                    {open ? <ul>
                        <li onClick={() => console.log("event 1")}>notify1</li>
                        <li>notify2</li>
                        <li>notify3</li>
                        <li>notify4</li>
                    </ul> : null}
                </div>
            </main>
        </header>
    )
}

export default Notification
