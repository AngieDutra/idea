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
            res.render('game')
        }catch (error) {
            throw error;
        }
    }
        
};
module.exports = mainController;