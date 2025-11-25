const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');

// konfigurasi multer (simpan image ke buffer)
const storage = multer.memoryStorage();
const Upload = multer({ storage });

router.post('/komik', Upload.single('gambar'), komikController.createKomik);
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.put('/komik/:id', Upload.single('gambar'), komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;
