import { shallowMount } from '@vue/test-utils'
import products from '@/pages/products.vue'
import * as firestore from '../mocks/firestore'

describe('Products', () => {

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(products);
    expect(wrapper.vm).toBeTruthy();
  });

  test("loads products asynchronously", async() => {
    const $fire = { firestore }
    const mocks = { $fire };
    const wrapper = shallowMount(products, { mocks });
    await wrapper.setData({
      products: [{id: 1}]
    })
    expect(wrapper.vm.products).toEqual([{id: 1}]);
  });
});
