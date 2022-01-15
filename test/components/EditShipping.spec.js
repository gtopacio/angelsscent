import { shallowMount, mount } from '@vue/test-utils'
import EditShipping from '@/components/EditShipping.vue'
import * as $router from '../mocks/router'
import * as firestore from '../mocks/firestore'

describe('EditShipping', () => {

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
    const wrapper = shallowMount(EditShipping, propsData);
    expect(wrapper.vm).toBeTruthy();
  });

  test("calls submit when submit button was clicked", () => {
    const $fire = { firestore };
    const mocks = {$fire, $router};
    const wrapper = shallowMount(EditShipping, {propsData, mocks});
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });
});
