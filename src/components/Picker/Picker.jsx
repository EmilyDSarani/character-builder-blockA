import React from 'react'
//now that the state has been set, this is how we pass it through. 
export default function Picker({
    animal,
    setAnimal,
    shirt,
    setShirt,
    pant,
    setPant,
    shoe,
    setShoe,
    newCatchphrase,
    setNewCatchphrase,
    setCatchphrase,
    handleClick
}) {
//these Options will be used later in the dropdown menu so that we can set the value of the spefic item so that the image will render correctly later
    const animalOptions = ['lion', 'monkey', 'cow'];
    const shirtOptions = ['overall', 'hawaiian', 'blue']
    const pantOptions = ['jean', 'jogger', 'tight']
    const shoeOptions = ['colorful', 'slipper', 'ballet']

    return (
        <div>
            <label>
                Animal:
                {/* This will repeat for shoes, shirts, and pants. So what this is saying is that we are setting the value to the animal which we got from state, then set the animal state. then we will map through the different options which will also render in the picture depending on what value that we select.  */}
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
            <label>
                What's Your Catchphrase?
                <input
                type='text'
                value={newCatchphrase}
                onChange={(e) => setNewCatchphrase(e.target.value)}
                />
            </label>
            <button type='button' onClick={handleClick}>
             Add Phrase   
            </button>
        </div>
    )
}
