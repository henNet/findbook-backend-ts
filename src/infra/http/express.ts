import express, { Application } from "express";
import cors from "cors";
import { BookRoutes } from "../routes/books.routes";
import { connect } from "../database/mongoose";
import dotenv from "dotenv";

/* Para ler as variaveis de ambiente do arquivo .env */
dotenv.config();

class Express {
  app: Application;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    BookRoutes(this.app);
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

  listen() {
    this.app.listen(3333, () => {
      connect();
      console.log("Server online on Port 3333");
    });
  }
}

export default Express;
