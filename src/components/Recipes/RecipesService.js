import axios from 'axios';

export const getAllRecipes = async () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpwZW5hQGdtYWlsLmNvbSIsInN1YiI6IjYyYmVlZjE2MTA1NTc2OTc4Nzc0MzJmMiIsIm5hbWUiOiJKdWFuIFBlw7FhIiwiaWF0IjoxNjU2Njk0OTk0LCJleHAiOjE2NTY3ODEzOTR9.qnSqYwKTdeiVQ3axQNynoathZ7uV5h9MPevFPydFLPw';
  const response = await axios.get(`http://localhost:3001/recipes`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  return response.data;
}