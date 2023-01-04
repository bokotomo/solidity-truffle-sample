import React from 'react';
import Home from '../components/pc/templates/Home';
import { useFetch } from '../modules/fetch/home';

/**
 * home
 */
function Index() {
  const { accounts } = useFetch();

  return <Home accounts={accounts} />;
}

export default Index;
