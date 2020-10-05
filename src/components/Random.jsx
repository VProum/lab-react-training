import React from 'react'

const Random = (props) => {
    return (
        <div className="random border">
            {`Random value between ${props.min} and ${props.max} => ` + Math.round(Math.random() * (props.max - props.min) + props.min)}
        </div>
    )
}

export default Random
