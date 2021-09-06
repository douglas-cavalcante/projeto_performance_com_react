import React from 'react';

const ZapperItem = ({ zapper: { image, name, sector } }) => {

  return (
    <article className="card">
      <img
        className="thumbnail"
        src={image}
        alt="Foto da pessoa"
      />
      <span className="person-name">{name}</span>
      <span>{sector}</span>
    </article>
  );
}

export default React.memo(ZapperItem);