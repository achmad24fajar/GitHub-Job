import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import parse from 'html-react-parser';

import { fetchDetail } from '../../redux/jobs';
import { DetailBody, DetailContainer, DetailDescription, DetailHeader, DetailSidebar, CardCompany, ApplyCard } from './Detail.style';
import { Link } from 'react-router-dom';

const Detail = () => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {dataDetail} = useSelector(state => state.jobs);

    const [id, setId] = useState('');

    useEffect(() => {
       const split = pathname.split('/');
       setId(split[3]);
    }, [pathname])

    useEffect(() => {
        dispatch(fetchDetail(id))
    }, [id])

    console.log(pathname)
  return (
    <DetailContainer>
        <Link to="/jobs" className='back'>Back</Link>
        <DetailHeader>
             <span>{dataDetail.type} / {dataDetail.location}</span>
             <h3>{dataDetail.title}</h3>
        </DetailHeader>
        <DetailBody>
            <DetailDescription>
                {parse(dataDetail.description)}
            </DetailDescription>
            <DetailSidebar>
                <CardCompany>
                    <h4>{dataDetail.company}</h4>
                    <img src={dataDetail.company_logo} />
                    <a href={dataDetail.company_url}>{dataDetail.company_url}</a>
                </CardCompany>
                <ApplyCard>
                    <h4>How to apply</h4>
                    {parse(dataDetail.how_to_apply)}
                </ApplyCard>
            </DetailSidebar>
        </DetailBody>
    </DetailContainer>
  )
}

export default Detail