import React, { useState } from 'react'

export const ArrayUseState = () => {
    const initialState = ['peter', 'john']
    const [persons, setPerson] = useState(initialState)
    const handleChange = () =>{
        persons.push('paul')
        persons.push('st')
        const newPersons = [...persons]
        setPerson(newPersons)
    }  
    console.log("Arrayusestate")
    return(
        <div>
            <button onClick={handleChange}>click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}