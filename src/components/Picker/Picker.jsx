import React from 'react'

export default function Picker({
    animal,
    setAnimal,
    shirt,
    setShirt,
    pant,
    setPant,
    shoe,
    setShoe
}) {

    const animalOptions = ['lion', 'monkey', 'cow'];
    const shirtOptions = ['overall', 'hawaiian', 'blue']
    const pantOptions = ['jeans', 'jogger', 'tights']
    const shoeOptions = ['colorful', 'slipper', 'ballet']

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
            <label>
                Shirt:
                <select value={shirt} onChange={(e) => setShirt(e.target.value)}>
                    {shirtOptions.map((picture) => (
                        <option key={picture}> {picture}</option>
                    ))}
                </select>
            </label>
            <label>
                Pants:
                <select value={pant} onChange={(e) => setPant(e.target.value)}>
                    {pantOptions.map((picture) => (
                        <option key={picture}> {picture}</option>
                    ))}
                </select>
            </label>
            <label>
                Shoes:
                <select value={shoe} onChange={(e) => setShoe(e.target.value)}>
                    {shoeOptions.map((picture) => (
                        <option key={picture}> {picture}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}
