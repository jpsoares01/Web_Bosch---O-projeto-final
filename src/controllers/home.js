
// const aluno = require('../model/aluno');
// const turma = require('../model/turma');

module.exports = 
{
    async pagInicialget(req, res)
    {

        res.render('../views/index', {})

    },

    async pagInicialPost(req, res)
    {

        res.render('../views/index', {})
    }

 }

