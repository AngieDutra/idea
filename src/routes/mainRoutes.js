const express = require('express');
const router = express.Router();
const multer = require('multer');
const mainController = require('../controllers/mainController');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, path.resolve(__dirname,'../../public/uploads'));
    },
    filename:(req,file,cb)=>{
        let oldName = file.originalname.split('.')
        oldName = oldName[0]
        cb(null, file.fieldname + '-' + Date.now() + oldName + path.extname(file.originalname));
    }
});

const upload = multer({storage})

// Start
router.get('/',mainController.start);

// Game
router.get('/game',mainController.game);

//Register
router.get('/register',mainController.register);
router.post('/register',[upload.single('avatar')],mainController.createUser);

//Ballot
router.post('/ballot',mainController.ballot);

module.exports = router;