const router = require("express").Router();
//auth.controller'dan gelen login ve registeri alıyoruz.
//daha sonra auth.routes sayfasını app.js'de tanımlıyoruz.
const { login, register} = require("../controllers/auth.controller");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
