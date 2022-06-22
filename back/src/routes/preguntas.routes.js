const { Router } = require('express');

const preguntasCtrl = require('../controllers/preguntas.controler');
const imgCtrl =  require('../controllers/img.controler');

const router = Router();

router.get('/', preguntasCtrl.getPreguntas);
router.get('/:id', preguntasCtrl.getPregunta);
router.post('/', preguntasCtrl.postPregunta);
router.put('/:id', preguntasCtrl.putPregunta);
router.delete('/:id', preguntasCtrl.deletePregunta);

router.post('/img', imgCtrl.multerMW, imgCtrl.uploadImg);
router.delete('/img/:id', imgCtrl.deleteImg);


module.exports = router;