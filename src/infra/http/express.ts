import express, { Application } from "express";
import cors from "cors";

class Express {
  app: Application;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.erroMiddleware();
  }
  
  private initMiddlewares() {
    /* Para que respostas sejam devolvidas em JSON */
    this.app.use(express.json());

    /* Para interpretar url que tenham algum % 
    ex: Ol%20 mundo*/
    this.app.use(express.urlencoded({ extended: true }));

    /* Para requisiçõs de diferentes origens */
    this.app.use(cors());
  }

  private erroMiddleware() {
    
  }
    
  listen() {
      this.app.listen(3333, () => {
          console.log("Server online on Port 3333");
    })
  }
}

export default Express;