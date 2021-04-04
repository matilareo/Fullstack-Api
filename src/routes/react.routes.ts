import {Router} from 'express';
import path from "path";
    const router = Router();


router.get(['/app/assets*'],(req, res)=>{
  const processedUrl = req.url.split('/');
  res.sendFile(path.join(__dirname, '../../build',processedUrl[processedUrl.length - 1]));
})

router.get(['/app*'],(_req, res)=>{
  res.sendFile(path.join(__dirname, '../../build/index.html'));
})

export default router;
