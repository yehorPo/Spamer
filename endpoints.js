import Router from "express";
import Controllers from "./controllers.js";
import cors from 'cors';
const router = Router();
cors({
  origin: "*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  optionsSuccessStatus: 200
});
router.get('/post',cors(), Controllers.getAll);
router.post('/post',cors(), Controllers.add);
router.get('/post/:id',cors(), Controllers.getOne);
router.put('/post',cors(), Controllers.update);
router.delete('/post/:id',cors(), Controllers.delete);

export default router;