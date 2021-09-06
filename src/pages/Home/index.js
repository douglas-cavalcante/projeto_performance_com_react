import React, { useEffect, useRef, useState } from 'react';
import ZapperList from '../../components/ZappersList';

import api from '../../services/api';

import './styles.css';

const Home = () => {
  const inputSearchRef = useRef(null);
  const scrollCardsRef = useRef(null);

  const [search, setSearch] = useState('');
  const [sectorOption, setSectorOption] = useState('');

  const [zappers, setZappers] = useState([]);

  useEffect(() => {
    inputSearchRef.current.focus();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(`/zappers?q=${search}`);
      console.log(response)
      setZappers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchData();
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container" ref={scrollCardsRef}>
      <div className="content">

        <h1 className="title">Conta Zap - Zappers</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="input-search"
            placeholder="Pesquisa por um colaborador ..."
            ref={inputSearchRef}
          />
          <select
            value={sectorOption}
            onChange={(e) => setSectorOption(e.target.value)}
            className="select-sector"
          >
            <option>
              Marketing
            </option>
            <option>
              Desenvolvimento de BOT
            </option>
            <option>
              QA
            </option>
          </select>
        </form>


        <ZapperList zappers={zappers} />

        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, scrollCardsRef.current.offsetTop)
          }}>
          Voltar ao topo
        </button>

      </div>
    </div>
  );
}

export default Home;