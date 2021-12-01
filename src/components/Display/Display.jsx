import React from 'react'

export default function Display({catchphrase}) {
    console.log(catchphrase)
    return (
        <div>
            {catchphrase.map((phrase) => (
                <p key={phrase}>{phrase}</p>
            ))}
        </div>
    );
}
