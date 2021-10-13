import Router from "express";
import Controllers from "./controllers.js";

const router = Router();

router.get('/post', Controllers.getAll);
router.post('/post', Controllers.add);
router.get('/post/:id', Controllers.getOne);
router.put('/post', Controllers.update);
router.delete('/post/:id', Controllers.delete);

export default router;