import React from 'react'

const Header = () => {
    const headerStyle = {textAlign: 'center', padding: 20, background: 'black', color: 'white', textTransform: 'uppercase', fontWeight: 'bold', fontFamily: 'sans-serif'};
    return (
        <div style = {headerStyle}>
            Phone Directory
        </div>
    )
}

export default Header
