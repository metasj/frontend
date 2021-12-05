import { useMutation } from 'react-query';
import axios from 'axios';

export default function useApply() {
  return useMutation((data) => axios.post('/api/apply', data));
}
