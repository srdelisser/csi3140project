import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Register from './Register';
import { db } from "./firebase";
import { firestore } from 'firebase';
import VueFirestore from 'vue-firestore';

describe('Methods', () => {
    it('Register Test', () => {
        const testUser = {
            'firstname': 'test',
            'lastname': 'Lachlan',
            'email': 'test@test.com',
            'password': 'test12345/',
            'gender': 'male'
        };
        const localVue = createLocalVue();
        const wrapper = shallowMount(Register, {localVue});
        wrapper.vm.firstname = testUser.firstname;
        wrapper.vm.lastname = testUser.lastname;
        wrapper.vm.email = testUser.email;
        wrapper.vm.password = testUser.password;
        wrapper.vm.gender = testUser.gender;
        wrapper.vm.addUser();

    })
});