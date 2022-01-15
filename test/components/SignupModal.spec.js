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

  test("calls submit when submit button was clicked", () => {
    const $fire = { firestore, auth };
    const mocks = {$fire, $router, $store};
    const wrapper = shallowMount(SignupModal, {mocks});
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});
