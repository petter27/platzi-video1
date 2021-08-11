import React from 'react';
import '../assets/styles/components/Categoria.scss';

const Categoria = ({ children, title }) => {
  return (
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  );
};

export default Categoria;

