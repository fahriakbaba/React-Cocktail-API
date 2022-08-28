import React from 'react'
import Cocktails from '../components/Cocktails';
import SearchForm from '../components/SearchForm';

function Home() {

  return (
    <div>
      <SearchForm />
      <Cocktails />
    </div>
  )
}

export default Home;