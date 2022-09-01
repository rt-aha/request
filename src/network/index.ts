import { TypeRestfulParams } from '@/interface/api'
import restful from '@/api/libs/restful';

const jsonplaceholderConfig: TypeRestfulParams = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 100000,
};

export const jsonplaceholderRequset = restful(jsonplaceholderConfig);
