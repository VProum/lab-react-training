import React from 'react'

const IdCard = (props) => {
    return (
        <div className="horizontal-container border idcard">
            <img src={props.picture} alt="Profile Picture"/>
            <div>
                <ul>
                    <li><b>First name : </b> {props.firstName}</li>
                    <li><b>Last name : </b> {props.lastName}</li>
                    <li><b>Gender : </b> {props.gender}</li>
                    <li><b>Height : </b> {props.height} cm</li>
                    <li><b>Birth : </b> {props.birth}</li>
                </ul>
            </div>
        </div>
    )
}

export default IdCard
