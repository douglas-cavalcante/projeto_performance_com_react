import React, { useMemo } from 'react';
import ZapperItem from '../ZapperItem';

const ZappersList = ({ zappers }) => {

  const renderCustomersList = useMemo(() => (
    zappers.map(pessoa => <ZapperItem key={pessoa.name} zapper={pessoa} />)
  ), [zappers]);

  return (
    <>
      <section className="cards-content">
        {zappers.map(pessoa => <ZapperItem key={pessoa.name} zapper={pessoa} />)}
      </section>
    </>
  );
}

export default ZappersList;