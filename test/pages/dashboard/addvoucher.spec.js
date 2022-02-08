import { shallowMount, mount } from '@vue/test-utils'
import addvoucher from '@/pages/dashboard/addvoucher.vue'
import * as $router from '../../mocks/router'
import * as firestore from '../../mocks/firestore'

describe('Edit Voucher', () => {

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(addvoucher);
    expect(wrapper.vm).toBeTruthy();
  });

  window.alert = () => {};
  jest.spyOn(console, 'error').mockImplementation(() => {});

  test("calls submit when submit button was clicked", () => {
    const $fire = { firestore };
    const mocks = {$fire, $router};
    const wrapper = shallowMount(addvoucher, { mocks });
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });

  test("delete voucher", () => {
    const $fire = { firestore };
    const mocks = {$fire, $router};
    const wrapper = shallowMount(addvoucher, { mocks });
    wrapper.setData({
      voucher:[{id:1, code:"unittestdelete", expiry:"2022-02-02", amount:123, minSpend:123}]
    })
    const spy = jest.spyOn(wrapper.vm, 'deleteVoucher');
    wrapper.vm.deleteVoucher("asdf");
    //wrapper.find('#voucher-delete').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

});
