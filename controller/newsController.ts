import NewsService from '../services/newsService'
import * as HttpStatus from 'http-status'
import Helper from '../infra/helper'
// import httpStatus = require('http-status');

class NewsController {

    sendResponse = function (res, statusCode, data) {
        res.status(statusCode).json({ result: data });
    }

    get(req, res) {

        NewsService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(req, res) {

        const _id = req.params.id;
        NewsService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(req, res) {

        let vm = req.body;
                
        NewsService.create(vm)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, "Notícia cadastrada com suscesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    update(req, res) {

        const _id = req.params.id;
        let news = req.body;
        
        NewsService.update(_id,news)        
            .then(news => Helper.sendResponse(res, HttpStatus.OK, "A noticia foi atualizada com suscesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
     delete(req, res) {
         const _id= req.params.id;
         NewsService.delete(_id)
        .then(() => Helper.sendResponse(res, HttpStatus.OK, "A noticia foi deletada com suscesso!"))
         .catch(error => console.error.bind(console, `Error ${error}`));       
     }
}

export default new NewsController();