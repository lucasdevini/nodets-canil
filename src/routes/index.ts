import { Router } from "express";
import * as pagesController from '../controllers/pagesController'
import * as searchController from '../controllers/searchController'

const router = Router();

router.get('/', pagesController.home);
router.get('/cachorros', pagesController.cachorros);
router.get('/gatos', pagesController.gatos);
router.get('/peixes', pagesController.peixes);

router.get('/pesquisa', searchController.pesquisa);

export default router;