import { TypeRestfulParams } from '@/interface/api'
import restful from '@/network/libs/restful';

const jsonplaceholderConfig: TypeRestfulParams = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 100000,
};

const localConfig: TypeRestfulParams = {
  baseURL: 'http://localhost:8010',
  timeout: 100000,
};

export const jsonplaceholderRequset = restful(jsonplaceholderConfig);
export const localRequest = restful(localConfig);
