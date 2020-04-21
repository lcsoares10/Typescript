import { Request,Response } from 'express';
import EmailService from '../services/emailService';

const users = [
    { name:'Diego', email: 'teste@gmail.com' }
];


export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {
                name: 'lucas',email:'lucas@gmail.com'
            },
            message: {
                subject:'Bemvindo ao sistema',
                body:'Seja bem vindo'}
        });
       return res.send(); 
    }
};