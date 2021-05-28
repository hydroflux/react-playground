import React from 'react'

export default function DigimonCard({ digimon }) {
    return (
        <div className="digimon-card">
            <img src={digimon.img} alt={digimon.name} />
            <h2>{digimon.name}</h2>
            <h3>{digimon.level}</h3>
        </div>
    )
}
