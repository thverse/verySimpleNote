import { createPool } from 'mysql2/promise';

export const connect = async () => {

    try {
        const connection = await createPool({
            host : 'localhost',
            user : 'root',
            database: 'vsn',
            connectionLimit : 10 
        });

        return connection;
               
    } catch (e) {
        
        throw new Error(e);
    }
}


