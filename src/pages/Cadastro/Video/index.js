import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';

// import { Container } from './styles';

function Video() {
  return (
    <PageDefault>
      <h1>
        Página de cadastro de video
      </h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default Video;
