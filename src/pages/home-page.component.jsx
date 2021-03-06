import React, { useState } from 'react';
import CardList from '../components/card-list.component';
import SearchBar from '../components/searchbar.component';
import Table from '../components/table.component';

const HomePage = () => {
  const [search, setSearch] = useState('search query');
  const handleSearch = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container mx-auto mt-5 font-sans  h-screen overflow-hidden ">
      <SearchBar
        search={search}
        handleChange={(value) => setSearch(value)}
        handleSearch={(e) => handleSearch(e)}
      />
      <CardList />
      <Table />
    </div>
  );
};

export default HomePage;
