import { shallowMount, mount } from '@vue/test-utils'
import register from '@/pages/admin/register.vue'
import * as $router from '../../mocks/router'
import * as firestore from '../../mocks/firestore'
import * as $store from '../../mocks/store'
import * as auth from '../../mocks/auth'

describe('Register', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(register);
    expect(wrapper.vm).toBeTruthy();
  });

  test("register new user", async() => {
    const $fire = { firestore, auth };
    const mocks = {$fire, $router, $store};
    const wrapper = shallowMount(register, {mocks});
    await wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  window.alert = () => {};
  jest.spyOn(console, 'error').mockImplementation(() => {});
  
  test("register new user error", async() => {
    const $fire = { firestore };
    const mocks = {$fire, $router, $store};
    const wrapper = shallowMount(register, {mocks});
    await wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });
});
