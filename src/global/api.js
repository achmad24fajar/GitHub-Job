import { async } from '@firebase/util';
import axios from 'axios';

export const getJobLists = async (page = 1) => {
  const res = await axios.get(
    `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${page}`
  );
  return res;
};

export const filterJob = async (jobDesc = '', location = '', fullTime) => {
  const res = await axios.get(
    `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${jobDesc}&location=${location}&type=${
      fullTime ? 'Full Time' : ''
    }`
  );
  return res;
};

export const getDetail = async (id) => {
  const res = await axios.get(
    `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
  );
  return res;
};
