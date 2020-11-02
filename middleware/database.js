import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
import { dbConfig } from "../config";

const client = new MongoClient(
  `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.name}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const database = async (req, res, next) => {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("consumexalapa");
  return next();
};

const middleware = nextConnect();

middleware.use(database);

export default middleware;
