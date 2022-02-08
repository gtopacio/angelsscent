import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cart from '@/pages/cart.vue'
import * as firestore from '../mocks/firestore'
import * as $router from '../mocks/router'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Products', () => {

    const cartRemove = jest.fn();
    const cartIncrease = jest.fn();
    const cartDecrease = jest.fn();

    const store = new Vuex.Store({
        modules:{
            cart:{
                state:{
                    items: [{id: 1}],
                    total: 0,
                    totalWeight: 0,
                    totalQty: 0
                },
                mutations: {
                    'cart/increaseQty': cartIncrease,
                    'cart/decreaseQty': cartDecrease,
                    'cart/remove': cartRemove
                }
            }
        }
    });

    const data = {
        items: [{id: 1}],
        voucher:"qwe"
    }

    const $fire = { firestore }
    const mocks = { $fire, $router, data };
    const stubs = ['RemoveCart'];
    const options = { mocks, stubs, localVue, store };

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(cart, options);
    expect(wrapper.vm).toBeTruthy();
  });

  test("addItem", async() => {
    const wrapper = shallowMount(cart, options);
    const spy = jest.spyOn(wrapper.vm, 'addItem');
    await wrapper.find('#plus1').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  test("subtractItem", async() => {
    const wrapper = shallowMount(cart, options);
    const spy = jest.spyOn(wrapper.vm, 'subtractItem');
    await wrapper.find('#minus1').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  test("checkQty", async() => {
    const wrapper = shallowMount(cart, options);
    await wrapper.find('#cart-voucher').setValue('qwe');
    const spy = jest.spyOn(wrapper.vm, 'checkQty');
    await wrapper.find('#checkQtyBtn').trigger('click');
    expect(spy).toHaveBeenCalled();
  });
});
