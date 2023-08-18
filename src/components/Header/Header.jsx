import { Link } from "react-router-dom";


export default function Header() {

    const adidasURL = 'https://www.adidas.com.ar/';

    return(
        <section>
            <h1>TITULO</h1>
            <p>User</p>
            <Link to={adidasURL} target="blank">
                <p>ADIDAS</p>
            </Link>
            <Link to='/product1'>
                <p>PRODUCTO: GOLF</p>
            </Link>
        </section>
    )
}