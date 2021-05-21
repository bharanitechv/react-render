import React, { useState } from 'react'

export const ObjectUseSate = () => {
    const initialState = {
        fname : 'Bharani',
        lname : 'venugopal'
    }
    const [person, setPerson] = useState(initialState)
    const changeName = () =>{
        // person.fname = 'john'
        // person.lname = 'mith'
        const newPerson = {...person}
        newPerson.fname = 'john'
        newPerson.lname = 'mith'
        setPerson(newPerson)
    }
    console.log("Object use state Render")
    return(
        <div>
            <button onClick = {changeName}>{person.fname}{person.lname}</button>
        </div>
    )
}

