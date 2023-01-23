import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import { Fragment, useEffect } from 'react';
import { auth } from './utils/firebase.utils';
import Loading from './components/Loading/Loading.component';
import { useSelector } from 'react-redux';

function App() {
  const { loading } = useSelector((state) => state.jobs);
  return (
    <Fragment>
      {loading && <Loading />}

      <Routes>
        <Route path='/*' element={<Layout />} />
      </Routes>
    </Fragment>
  );
}

export default App;
