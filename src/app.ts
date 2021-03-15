import express, { Application } from 'express';
import morgan from 'morgan';
import indexRoutes from './routes'


export class App {

    private app: Application;
    
    constructor(private port?: number){
        this.app = express();
        this.settings();
        this.middlewares(); 
        this.initRoutes();

    }

    settings(){
         this.app.set('port', this.port || process.env.PORT || 1127);
    }

    middlewares(){
        this.app.use(morgan('dev')); 
        
    }

    initRoutes(){
        this.app.use(indexRoutes);
    }

    async listen(){
         
        await this.app.listen (this.app.get('port'));
        console.log(`Server on port ${this.app.get('port')}`)
    }

}