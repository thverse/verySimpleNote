import express, { Application } from 'express';
import morgan from 'morgan';
import IndexRoutes from './routes/indexRoutes';
import PostsRoutes from './routes/postRoute';


export class App {

    private app: Application;
    
    constructor(private port?: number){
        this.app = express();
        this.settings();
        this.middlewares(); 
        this.initRoutes();

    }

    private settings(){
         this.app.set('port', this.port || process.env.PORT || 1127);
    }

    private middlewares(){
        this.app.use(morgan('dev')); 
        this.app.use(express.json());
        
    }

    private initRoutes(){
        this.app.use(IndexRoutes);
        this.app.use('/posts', PostsRoutes);
    }

    async listen(){
         
        await this.app.listen (this.app.get('port'));
        console.log(`Server on port ${this.app.get('port')}`)
    }

}