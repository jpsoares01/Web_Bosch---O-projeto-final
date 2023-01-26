const disciplina = require('../model/disciplinas')
const conteudo = require('../model/conteudo')
const aluno = require('../model/alunos')
const turma = require('../model/turmas')

module.exports = {
    async alunoInsert(req, res){
        const dados = req.body;

        await aluno.create({
            EDV: dados.edv,
            Nome: dados.nome,
            Senha: 'ETS' + dados.edv,
            Turma_ID: dados.turma
        })
        res.redirect('/');
    },

    async ConteudoInsert(req, res){
        const dados = req.body;

        await conteudo.create({
            Nome: dados.nome,
            Turma_ID: dados.turma,
            Instrutor_ID: dados.instrutor,
            Disciplina_ID: dados.disciplina
        })
        res.redirect('/');
    },

    async DisciplinaInsert(req, res){
        const dados = req.body;

        await disciplina.create({
            EDV: dados.nome,
            Carga_Horaria: dados.carga_h,
            Data_Inicio: dados.data_init,
            Data_Fim: dados.data_fim
        })
        res.redirect('/');
    },

    async instrutoresInsert(req, res){
        const dados = req.body;

        await aluno.create({
            EDV: dados.edv,
            Nome: dados.nome,
            Senha: 'ETS' + dados.edv,
            Turma_ID: dados.turma
        })
        res.redirect('/');
    },

    async salaInsert(req, res){
        const dados = req.body

        await turma.create({
            Nome: dados.nome
        })
        res.redirect('/');
    }
}


    
