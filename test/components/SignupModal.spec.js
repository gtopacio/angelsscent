import { shallowMount, mount } from '@vue/test-utils'
import SignupModal from '@/components/SignupModal.vue'
import * as $router from '../mocks/router'
import * as firestore from '../mocks/firestore'
import * as $store from '../mocks/store'
import * as auth from '../mocks/auth'

describe('SignupModal', () => {
    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(SignupModal);
    expect(wrapper.vm).toBeTruthy();
  });

  test("calls submit when submit button was clicked", async () => {
    const $fire = { firestore, auth };
    const mocks = {$fire, $router, $store};
    const wrapper = shallowMount(SignupModal, {mocks});

    await wrapper.find('#signup-firstname').setValue('firstname');
    await wrapper.find('#signup-lastname').setValue('lastname');
    await wrapper.find('#signup-contactNo').setValue('contactno');
    await wrapper.find('#signup-email').setValue('email');
    await wrapper.find('#signup-password').setValue('password');
    await wrapper.find('#signup-street').setValue('street');
    await wrapper.find('#signup-city').setValue('city');
    await wrapper.find('#signup-province').setValue('province');
    await wrapper.find('#signup-zipcode').setValue('zipcode');

    await wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
    //expect(auth.createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  test("submit error", () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    window.alert = () => {};
    const $fire = { firestore };
    const mocks = {$fire, $router, $store};
    const wrapper = shallowMount(SignupModal, {mocks});
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });
});
