import React, { useEffect, useState } from 'react'
import FilterForm from '../../components/FilterForm/FilterForm.components'
import { ButtonLoadMore, JobFilter, JobList, JobListLeft, JobListRight, JobLists, JobListsContainer, JobListsHeader, JobLoadMore, JobsContainer } from './Jobs.styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobLists } from '../../redux/jobs'
import { useNavigate } from 'react-router'

const Jobs = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {dataJobs} = useSelector(state => state.jobs);

    const [page, setPage] = useState(1);

    useEffect(() => {
        if(page !== 3) {
            dispatch(fetchJobLists({page}));
        }
    }, [page]);

    const handleDetail = (id) => {
        navigate(`/job/detail/${id}`);
    }

  return (
    <JobsContainer>
        <JobFilter>
            <FilterForm />
        </JobFilter>
        <JobListsContainer>
            <JobListsHeader>Job Lists</JobListsHeader>
            <JobLists>
                {dataJobs?.map(job => (
                    <JobList onClick={() => handleDetail(job?.id)}>
                        <JobListLeft>
                            <h4>{job?.title}</h4>
                            <div>
                                <span>{job?.company}</span> - <span className='type'>{job?.type}</span>
                            </div>
                        </JobListLeft>
                        <JobListRight>
                            <span className='location'>{job?.location}</span>
                            <span>1 day ago</span>
                        </JobListRight>
                    </JobList>
                ))}
            </JobLists>
        </JobListsContainer>
        <JobLoadMore>
            {dataJobs.length > 0 && (
            <ButtonLoadMore onClick={() => setPage(page + 1)} disabled={page === 2}>Load More</ButtonLoadMore>
            )}
        </JobLoadMore>
    </JobsContainer>
  )
}

export default Jobs