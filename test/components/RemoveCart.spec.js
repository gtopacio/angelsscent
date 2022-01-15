import { shallowMount, createLocalVue } from '@vue/test-utils'
import RemoveCart from '@/components/RemoveCart.vue'
import Vuex from 'vuex';
import * as $router from '../mocks/router'
import * as auth from '../mocks/auth'

const localVue = createLocalVue();

localVue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        cart:{
            state:{
                items: [],
                total: 0.0,
                totalWeight: 0,
                totalQty: 0
            },
            mutations:{
                'cart/remove': jest.fn()
            }
        }
    }
});

describe('Navbar', () => {

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(RemoveCart, {localVue, store});
    expect(wrapper.vm).toBeTruthy();
  });

  test("calls submit when submit button was clicked", () => {
    const $fire = { auth }
    const mocks = { $router, $fire };
    const wrapper = shallowMount(RemoveCart, { localVue, store, mocks });
    const deleteSpy = jest.spyOn(wrapper.vm, 'onDelete');
    wrapper.find('#deleteButton').trigger('click');
    expect(deleteSpy).toHaveBeenCalled();
  });
});
