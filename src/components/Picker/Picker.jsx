import React from 'react'

export default function Picker({
    animal,
    setAnimal,
    shirt,
    setShirt,
}) {

    const animalOptions = ['lion', 'monkey', 'cow'];
    const shirtOptions = ['overall', 'hawaiian', 'blue']

    return (
        <div>
            <label>
                Animal:
                <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
                    {animalOptions.map((picture) => (
                        <option key={picture}> {picture}</option>
                    ))}
                </select>
            </label>
            
        </div>
    )
}
