import React from 'react'

const Greetings = (props) => {
    return (
        <div className="greetings border">
            {translateHello(props.lang) + " " + props.children}
        </div>
    )
}


function translateHello(lang){
    switch(lang) {
        case "de" : return "Hallo"
        case "en" : return "Hello"
        case "es" : return "Hola"
        case "fr" : return "Bonjour"
        default : return "Hello"
    }
}

export default Greetings
