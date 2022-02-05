const express = require('express');

const {
  getShops,
  shopCreate,
  createProduct,
  shopDelete,
  fetchShop,
} = require('./controllers');
const upload = require('../../middleware/multer');

const router = express.Router();

router.param('shopId', async (req, res, next, shopId) => {
  const shop = await fetchShop(shopId, next);
  if (shop) {
    req.shop = shop;
    next();
  } else {
    const err = new Error('Shop Not Found');
    err.status = 404;
    next(err);
  }
});

router.get('/', getShops);
router.post('/', upload.single('image'), shopCreate);
router.post("/:shopId", createProduct)
router.delete('/:shopId', shopDelete);
router.put('/:shopId', upload.single('image'), shopUpdate);

module.exports = router;