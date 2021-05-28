import React from 'react'
import { useState } from 'react'

export default function DigimonForm({ digimons, setDigimons }) {

    const [ name, setName ] = useState('')
    const [ img, setImage ] = useState('')
    
    const createDigimon = event => {
        event.preventDefault()
        const newDigimon = { name, img}
        setDigimons([...digimons, newDigimon])

        // fetch(digimonURL, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
    }

    return (
        <form className="digimon-form" onSubmit={createDigimon}>
            <input type="text" name="name" placeholder="Name" onChange={ event => setName(event.target.value) }/>
            <input type="text" name="img" placeholder="Image URL" onChange={ event => setImage(event.target.value) }/>
            <input type="submit"/>
        </form>
    )
}
