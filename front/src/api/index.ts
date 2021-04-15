import apimock from '@/api/apimock';
import realApi from '@/api/api';

const APIMOCK = Number(process.env.VUE_APP_API_MOCK) === 1;

const api = APIMOCK ? apimock : realApi;

export default api;
