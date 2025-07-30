import React, { useState } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'; // Ou outra variação se precisar
import styled from 'styled-components';

function Header() {
  const [textoBusca, setTextoBusca] = useState('valor inicial do texto');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextoBusca(e.target.value);
  }

  //function onClickSearch(e: React.MouseEvent<HTMLButtonElement>): void {
  function onClickSearch( ): void {
    console.log(`Você pesquisou por: ${textoBusca}`);
  }

  return (
    <HeaderStyle>
      <HeaderTop>
        <Container>
          <Logo>
            <span>AL SKIN</span>
          </Logo>

          <SearchBar>
            <SearchInput
              type="text"
              placeholder="O que você está procurando?"
              className="search-input"
              onChange={handleOnChange}>
            </SearchInput>
          

            <SearchButton
              onClick={onClickSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
          </SearchBar>

          <HeaderActions>
            <CartBoutton>
              <FontAwesomeIcon icon={faCartShopping} />
            </CartBoutton>
          </HeaderActions>
        </Container>
      </HeaderTop>

      <HeaderNav>
        <div>
          <UL>
            <LI>Categorias</LI>
            <LI>Tipo de Pele</LI>
            <LI>Necessidade</LI>
            <LI>Ingredientes</LI>
          </UL>
        </div>

        <Promocao> <UL> <Promocao className="Promocao"> Kits até 50% OFF </Promocao></UL></Promocao>

        {/*textoBusca && <h6>{textoBusca}</h6>*/}
      </HeaderNav>
    </HeaderStyle>
  );
}

const HeaderStyle =styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTop = styled.div`
  padding: 1rem 0;
  border-bottom: 1px soLId #e5e5e5;
`;

const Container=styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo=styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
  letter-spacing: 0.5px;
`;

const UL =styled.ul`
  LIst-style-type: none; /* Remove os marcadores padrão */
    align-items: center; /* CentraLIza verticalmente */
`;

const LI=styled.li`
  display: inLIne; /* ou inLIne-block */
  margin: 10px; /* Adiciona um espaço entre os itens */
  align-items: center; /* CentraLIza verticalmente */
  font-size: 1vw; /* Tamanho médio, pode ajustar */
  color: black;
`;

const Promocao=styled.li`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  margin: 10px;
  justify-content: right;
  font-size: 1vw; /* Tamanho médio, pode ajustar */
  color: red;
  font-weight: 600;
`;

const SearchBar=styled.div`
  flex: 2;
  max-width: 4000px;
  margin: 0 2rem;
  position: relative;
`;


const SearchInput=styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
&:focus{
  border-color: #007bff;
}
&::placeholder{
  color: #9999
  ;
}
`;

const SearchButton=styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.1rem;
  border-radius: 50%;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
&:hover {
  background-color: #f0f0f0;
}`;

const HeaderActions=styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CartBoutton=styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
&:hover {
  background-color: #f0f0f0;
}`;

const HeaderNav=styled.nav`
  display: flex; 
  justify-content: space-between;
  background: none;
  border: none;
  letter-spacing: 0.5px;
  font-size: 1vw;
  list-style-type: none;
  align-items: center; /* Centraliza verticalmente */
`;

export default Header;