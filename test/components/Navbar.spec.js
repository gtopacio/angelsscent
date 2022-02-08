import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import Vuex from 'vuex';
import * as $router from '../mocks/router'
import * as $store from '../mocks/store'
import * as auth from '../mocks/auth'

const localVue = createLocalVue();

localVue.use(Vuex);
const store = new Vuex.Store($store);

describe('Navbar', () => {

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Navbar, {localVue, store, stubs: ['NuxtLink', 'SignupModal', 'LoginModal']});
    expect(wrapper.vm).toBeTruthy();
  });

  test("calls submit when submit button was clicked", () => {
    const $fire = { auth }
    const mocks = { $router, $fire };
    const wrapper = shallowMount(Navbar, { localVue, store, mocks, stubs: ['NuxtLink', 'SignupModal', 'LoginModal'] });
    wrapper.find('#signoutLink').trigger('click');
    expect(auth.signOut).toHaveBeenCalled();
  });
});
