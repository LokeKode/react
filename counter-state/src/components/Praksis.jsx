import React from 'react'

export default function Praksis() {

    const [erKlarForPraksis, setErKlarForPraksis] = React.useState(true)

    function changeMind() {
        setErKlarForPraksis(prevKlar => !prevKlar)
    }

    return(
        <main>
            <h1 className="title">Er vi klare for praksis?</h1>
            <button
                onClick={changeMind} 
                className="value"
                aria-label={`Nåværende svar er ${erKlarForPraksis ? "Ja" : "Nei"}`}>
                    
                    {erKlarForPraksis ? "Ja" : "Nei"}

             </button>
        </main>
    )
} 