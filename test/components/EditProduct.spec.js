import { shallowMount, mount } from '@vue/test-utils'
import EditProduct from '@/components/EditProduct.vue'
import * as $router from '../mocks/router'
import * as firestore from '../mocks/firestore'

describe('EditProduct', () => {

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(EditProduct);
    expect(wrapper.vm).toBeTruthy();
  });

  test('calls submit when submit button was clicked', () => {
    let propsData = {
      id: "1",
      name: "name",
      description: "desc",
      length: 10,
      width: 5,
      height: 5,
      weight: 10,
      price: 100,
      qty: 10000,
      display: "displayed",
      tag: "men",
      img: "ASD"
  };
    const $fire = { firestore };
    const wrapper = mount(EditProduct, {propsData, mocks: {$fire, $router}});
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });
});
