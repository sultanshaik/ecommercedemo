import React from 'react'
import {Spinner} from 'react-bootstrap'
import '../styles/components/loader.scss'

function Loader() {
    return (
        <Spinner animation='border' role='status'
        className='spinner'>
            <span className='sr-only'>
                Loading...
            </span>
        </Spinner>
    )
}

export default Loader
