import React from 'react'
import DigimonCard from '../components/DigimonCard'

export default function DinosaurContainer({ digimons }) {

    const displayDigimonCards = () => {
        return digimons.map( digimon => <DigimonCard digimon={digimon} key={digimon.name}/>)
    }

    return (
        <section className="digimons-container">
            {displayDigimonCards()}
        </section>
    )
}