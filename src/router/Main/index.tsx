import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Header2 from '../../components/Header2';
import Series from '../../containers/Series';
import SingleSeriesRouter from '../../containers/SingleSeries/router';

const Main = (props: any) => {
    return <Routes>
        <Route path='/header' element={<Header header="Header from Main" />}></Route>
        <Route path='/header2' element={<Header2 header="Header2 from Main"/>}></Route>
        <Route path='/' element={<Series />}></Route>
        <Route path='/series/:id' element={<SingleSeriesRouter/>}></Route>
    </Routes>
}

export default Main;

