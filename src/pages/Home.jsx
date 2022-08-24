import React from 'react'
import Cocktails from '../components/Cocktails';
import SearchForm from '../components/SearchForm';

function Home() {
  return (
    <div>
      Home
      <SearchForm />
      <Cocktails />
    </div>
  )
}

export default Home;