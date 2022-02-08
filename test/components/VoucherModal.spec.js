import { shallowMount, mount } from '@vue/test-utils'
import VoucherModal from '@/components/VoucherModal.vue'
import * as $router from '../mocks/router'
import * as firestore from '../mocks/firestore'

describe('Edit Voucher', () => {

    let propsData = {
        id: "String",
        code: "String",
        expiry: "String",
        amount: "String",
        minSpend: "String"
    };

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(VoucherModal, propsData);
    expect(wrapper.vm).toBeTruthy();
  });

  test("calls submit when submit button was clicked", () => {
    const $fire = { firestore };
    const mocks = {$fire, $router};
    const wrapper = shallowMount(VoucherModal, {propsData, mocks});
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });
});
