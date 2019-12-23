import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
    const styles = {
        marginLeft:'auto',
        textDecoration:'none',
        color:'black'
    }

    return(
    <div className="App">
       <Link to='/' style={{ color:'black',textDecoration:'none'}}><div className="logo"><h3>Logo</h3></div></Link>
       <Link to='/menu' style={styles}><div className="menu"><h3>Menu</h3></div></Link>
       <Link to='/about' style={{textDecoration:'none',color:'black'}}><div className="about"><h3>About</h3></div></Link>
       <Link to='/features' style={{textDecoration:'none',color:'black'}}><div className="features"><h3>Features</h3></div></Link>
       <Link to='/contact' style={{textDecoration:'none',color:'black'}}><div className="contact"><h3>Contact</h3></div></Link>
    </div>
    )
}

export default Nav;