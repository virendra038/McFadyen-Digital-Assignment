import './Header.css';
export default function Header(){
    return (
        <div className="header">
            <div className="shortcuts">
                <a href="#edits">THE EDIT</a>
                <a href="#arrivals">NEW ARRIVALS</a>
                <a href="#designers">DESIGNERS</a>
                <a href="#clothing">CLOTHING</a>
                <a href="#shoes">SHOES</a>
                <a href="#bags">BAGS</a>
                <a href="#accessories">ACCESSORIES</a>
                <a href="#jewelry">JEWELRY</a>
                <a href="#beauty">BEAUTY</a>
                <a href="#home">HOME</a>
            </div>
            <div className='profile'>
                🔍🛒👳
            </div>
        </div>
    )
}