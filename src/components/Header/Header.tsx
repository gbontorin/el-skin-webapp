import React, { useState } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'; // Ou outra variação se precisar

function Header() {
  const [textoBusca, setTextoBusca] = useState('valor inicial do texto');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextoBusca(e.target.value);
  }

  function onClickSearch(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log(`Você pesquisou por: ${textoBusca}`);
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <span>AL SKIN</span>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="search-input"
              onChange={handleOnChange}
            />

            <button className="search-button" onClick={onClickSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="header-actions">
            <button className="cart-button">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div>
          <ul>
            <li>Categorias</li>
            <li>Tipo de Pele</li>
            <li>Necessidade</li>
            <li>Ingredientes</li>
          </ul>
        </div>

        <div className="Promocao"> <ul> <li className="Promocao"> Kits até 50% OFF </li></ul></div>

        {/*textoBusca && <h6>{textoBusca}</h6>*/}
      </nav>
    </header>
  );
}

export default Header;
