import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    const categories = [
        { id: 1, name: 'Categoría 1' },
        { id: 2, name: 'Categoría 2' },
        { id: 3, name: 'Categoría 3' },
        // Agrega más categorías aquí
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Nombre de la Tienda</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {categories.map(category => (
                            <li className="nav-item" key={category.id}>
                                <a className="nav-link" href="#">{category.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;

