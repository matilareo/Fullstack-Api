import {createConnection} from 'typeorm';
import 'reflect-metadata'

export async function connectDb() {
  await createConnection() 
  console.log('MySQL database is connected')
}