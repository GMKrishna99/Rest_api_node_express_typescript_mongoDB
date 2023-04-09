import express from 'express';
import { login, register } from '../controllerrs/authentication';

export default (router: express.Router) =>{
    router.post('/auth/register', register);
    router.post('/auth/login' , login);
};