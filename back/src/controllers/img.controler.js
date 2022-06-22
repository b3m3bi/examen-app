const multer = require('multer');
const path = require('path');

const url = require('url');
const fs = require('fs');

// TODO: recibir y manejar los errores
// TODO: agregrle la extensión a los archivos que se suben (puede que suban imágenes sin extensión)
// TODO: controlar el tamaño y dimensiones de las imágenes subidas
const diskStorageEngine = multer.diskStorage( {
	destination: (req,file,cb) => {
		cb(null, path.join(__dirname, '../public/images'));
	},
	filename: (req,file,cb) => {
		cb(null, Date.now() + '-' + file.originalname );
	} 
})
const upload = multer({storage: diskStorageEngine })

imgCtrl = {};

imgCtrl.multerMW = upload.single('imagen');

imgCtrl.uploadImg = (req, res, err) => {
	console.log(req.file);
	res.send({'message' : 'uploaded', 'imgUrl' : `${req.protocol}://${req.get('host')}/images/${req.file.filename}` });
}

imgCtrl.deleteImg = (req, res, err) => {
	fs.rm( path.join(__dirname, '../public/images', req.params.id ), (err) => {
		if(err){
			console.log(err);
			res.send({'message': 'Error: image cannot be deleted'});
		} else {
			res.send({'message' : 'image deleted'})
		}
	} );
}

module.exports = imgCtrl;