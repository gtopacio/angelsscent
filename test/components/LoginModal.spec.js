import { shallowMount, mount } from '@vue/test-utils'
import LoginModal from '@/components/LoginModal.vue'
import * as $router from '../mocks/router'
import * as firestore from '../mocks/firestore'
import * as $store from '../mocks/store'
import * as auth from '../mocks/auth'

describe('LoginModal', () => {

    let propsData = {
        id: "1",
        streetAdd: "String",
        city: "String",
        province: "String",
        region: "String",
        zipcode: "String" 
    };

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(LoginModal, propsData);
    expect(wrapper.vm).toBeTruthy();
  });

  test("calls submit when submit button was clicked", () => {
    auth.setData({ exists: true });
    firestore.setData({
        role: "admin",
        exists: true
    });
    const $fire = { firestore, auth };
    const mocks = {$fire, $router, $store};
    const wrapper = shallowMount(LoginModal, {propsData, mocks});
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
    expect(auth.signInWithEmailAndPassword).toHaveBeenCalled();
  });
});
