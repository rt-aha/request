import { IAxiosDefaultOptions } from '@/interface/api'
import restful from '@/network/libs/restful';
import graphql from '@/network/libs/graphql';


const jsonplaceholderConfig: IAxiosDefaultOptions = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 100000,
};

const localConfig: IAxiosDefaultOptions = {
  baseURL: 'http://localhost:8010',
  timeout: 100000,
};

const graphqlConfig: IAxiosDefaultOptions = {
  baseURL: 'https://point-client-api.howdesign.com.tw/graphql',
  timeout: 100000,
};

export const jsonplaceholderRequset = restful(jsonplaceholderConfig);
export const localRequest = restful(localConfig);
export const graphqlRequest = graphql(graphqlConfig);
