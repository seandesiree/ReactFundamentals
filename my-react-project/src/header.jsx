import { Component } from 'react';
import './header.css';


class Header extends Component {
    render (){
        return (
            <header className='imageWrapper'>
                <img className='overlayImage' src="techimage.jpg" alt="tech image" />;
                <span className='overlayText'>Sean Chamberlain</span>
            </header>
        )
    }
}

export default Header;