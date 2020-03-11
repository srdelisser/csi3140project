import Register from '@src/Resgister';
import Vue from 'vue';

describe('Register.vue', () => {

    it('displays users from the register', () => {
        // our test goes here
        const Constructor = Vue.extend(Register);
        const RegisterComponent = new Constructor().$moun
        // assert that component text contains items from the list
        expect(RegisterComponent.$el.textContent).to.contain('');
    })
    it('adds a new users to list on click', () => {
        // our test goes here
        // build component
        const Constructor = Vue.extend(Register);
        const RegisterComponent = new Constructor().$mount();
        //set value of new user
        RegisterComponent.firstName = 'Daniela';
        RegisterComponent.lastName = 'Mcfarland';
        RegisterComponent.email = 'Daniela_Mcfarland@gmail.com';
        RegisterComponent.password = '12345';
        // set value of gender
        RegisterComponent.gender = 'Female';
        // find button
        const button = RegisterComponent.$el.querySelector('button');

        // simulate click event
        const clickEvent = new window.Event('click');
        button.dispatchEvent(clickEvent);
        ListComponent._watcher.run();

        //assert list contains new user
        expect(RegisterComponent.$el.textContent).to.contain('Daniela');
        expect(RegisterComponent.users.firstName).to.contain('Daniela');
    })
})