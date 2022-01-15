import { shallowMount } from '@vue/test-utils'
import DeleteProduct from '@/components/DeleteProduct.vue'
import * as firestore from '../mocks/firestore';
import * as $router from '../mocks/router';

describe('DeleteProduct', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(DeleteProduct, { propsData: {id: "123"} });
    expect(wrapper.vm).toBeTruthy();
  });

  test('calls delete method when delete button was clicked', () => {
    const $fire = { firestore };
    const wrapper = shallowMount(DeleteProduct, {propsData: {id: "123"}, mocks: {$router, $fire}});
    const deleteSpy = jest.spyOn(wrapper.vm, 'deleteProduct');
    wrapper.find('button').trigger('click');
    expect(deleteSpy).toHaveBeenCalled();
    expect(firestore.deleteFunction).toHaveBeenCalled();
  });
});
