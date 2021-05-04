import { Connection, getConnection } from 'typeorm';

const db = (): Connection => getConnection();

export default db;
