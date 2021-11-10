const user = require('../models/user');
const quote = require('../models/quote');

const mainController = {
    start: async (req, res) => {
        try {
            res.render('start')
        }catch (error) {
            throw error;
        }
    },
    game: async (req, res) => {
        try {
            res.render('game', {list: quote.all()})
        }catch (error) {
            throw error;
        }
    },
    register: async (req, res) => {
        try {
            res.render('register')
        }catch (error) {
            throw error;
        }
    },
    createUser: async (req, res) => {
        try {
            user.create(req.body);
            res.render('ballot', {data: user.all()})
        }catch (error) {
            throw error;
        }
    }
        
};
module.exports = mainController;