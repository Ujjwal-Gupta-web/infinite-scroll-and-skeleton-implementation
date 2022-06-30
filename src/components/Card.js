import React from 'react'

const Card = ({user}) => {
    return (
        <>
            <div className='container p-3 bg-white my-3 border border-lg rounded d-flex align-items-center justify-content-between'>
                <h4 >{user.name.first + " " + user.name.last}</h4>
                <img className='border border-lg rounded' src={user.picture.large} alt={user.name.first + '-image'} />
            </div>
        </>
    )
}

export default Card