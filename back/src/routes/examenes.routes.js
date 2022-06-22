const { Router } = require('express');

const examenesCtrl = require('../controllers/examenes.controler');

const router = Router();

router.get('/', examenesCtrl.getExamenes );
router.get('/:id', examenesCtrl.getExamen );
router.post('/', examenesCtrl.postExamen );
router.put('/:id', examenesCtrl.putExamen );
router.delete('/:id', examenesCtrl.deleteExamen );

module.exports = router;