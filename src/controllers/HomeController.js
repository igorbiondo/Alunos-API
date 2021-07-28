import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Matheus',
            sobrenome: 'Ribeiro',
            email: 'matheusribeiro@gmail.com',
            idade: 20,
            peso: 68,
            altura: 1.87,
        });
        res.json(novoAluno);
    }
}

export default new HomeController();
