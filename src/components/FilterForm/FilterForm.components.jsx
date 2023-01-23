import React from 'react';
import { ButtonSubmit, FormButtonContainer, FormCheckbox, FormCheckboxContainer, FormContainer, FormInput, FormInputContainer } from './FilterForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterJob, setFilter } from '../../redux/jobs';

const FilterForm = () => {
  const dispatch = useDispatch();
  const {dataFilter} = useSelector(state => state.jobs);
  const {
    jobDesc,
    location,
    fullTime,
  } = dataFilter;

  const hanldeSumbit = (e) => {
    e.preventDefault();
    dispatch(fetchFilterJob())
  }

  return (
    <FormContainer onSubmit={hanldeSumbit}>
      <FormInputContainer>
        <label>Job Description</label>
        <FormInput
          type='text'
          placeholder='Filter by title, benefits, companies, expertice'
          value={jobDesc}
          onChange={(e) => dispatch(setFilter({key: 'jobDesc', value: e.target.value}))}
        />
      </FormInputContainer>
      <FormInputContainer>
        <label>Location</label>
        <FormInput
          type='text'
          placeholder='Filter by city, state, zip code or country'
          value={location}
          onChange={(e) => dispatch(setFilter({key: 'location', value: e.target.value}))}
        />
      </FormInputContainer>
      <FormCheckboxContainer>
        <FormCheckbox type='checkbox' checked={fullTime} 
        onChange={(e) => dispatch(setFilter({key: 'fullTime', value: e.target.checked}))}/>
        <label>Full Time Only</label>
      </FormCheckboxContainer>
      <FormButtonContainer>
        <ButtonSubmit type='submit'>Search</ButtonSubmit>
      </FormButtonContainer>
    </FormContainer>
  );
};

export default FilterForm;
