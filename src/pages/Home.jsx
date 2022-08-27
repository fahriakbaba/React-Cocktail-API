import React from 'react'
import Cocktails from '../components/Cocktails';
import SearchForm from '../components/SearchForm';
import Loading from "../components/Loading";
import { useGlobalContext } from '../context/context';

function Home() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      Home
      <SearchForm />
      <Cocktails />
    </div>
  )
}

export default Home;