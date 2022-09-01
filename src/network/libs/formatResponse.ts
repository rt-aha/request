import { TypeFormatResponse } from '@/interface/api'

export const formatResponse: TypeFormatResponse = ({ data = {}, status = 200 }) => ({
  data,
  status,
});

export const no = {};
