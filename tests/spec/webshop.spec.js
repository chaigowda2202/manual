
import {test} from "@playwright/test"
import {LoginPage} from '../page/login.js';
const config = require('../testdata/data.json');
import{register} from "../testdata/data.json"

test('should ', async({page}) => {

    let myLogin = new LoginPage(page)
    
    await myLogin.navigate(config.baseUrl.url);
    await myLogin.myloginObj(register.fname , register.lname , register.email , register.password , register.confirmpass)
    await myLogin.verifyRegistrationSuccess();

})