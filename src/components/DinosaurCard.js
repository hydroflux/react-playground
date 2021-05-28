import React from 'react'

export default function DinosaurCard({ dinosaur }) {
    return (
        <div className="dinosaur-card">
            <img src={dinosaur.image} alt={dinosaur.name} />
            <h2>{dinosaur.name}</h2>
            <h3>{dinosaur.type}</h3>
        </div>
    )
}
