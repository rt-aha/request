import {graphqlRequest} from '@/network';
// import { getThemeList, getTheme } from '@/api/gql/getThemes.gql';

export const getThemeListAPI = async (payload) => {
  const res = await graphqlRequest(getThemeList, payload);

  return res;
};

// TODO
export const getThemeAPI = async (payload) => {
  const res = await graphqlRequest(getTheme, payload);

  return res;
};
