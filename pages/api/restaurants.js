import nextConnect from "next-connect";
import dbMiddleware from "../../middleware/database";

const handler = nextConnect();

handler.use(dbMiddleware);

handler.get(async (req, res) => {
  const restaurants = await req.db.collection("restaurants").find({}).toArray();

  res.status(200).json(restaurants);
});

export default handler;
