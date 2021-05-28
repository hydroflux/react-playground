import React from 'react'
import DinosaurCard from '../components/DinosaurCard'

export default function DinosaurContainer({ dinosaurs }) {

    const displayDinosaurCards = () => {
        return dinosaurs.map( dinosaur => <DinosaurCard dinosaur={dinosaur} key={dinosaur.name}/>)
    }


    return (
        <section className="dinosaurs-section">
            {displayDinosaurCards()}
        </section>
    )
}
