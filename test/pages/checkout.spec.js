import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import checkout from '@/pages/checkout.vue'
import * as $router from '../mocks/router'
import * as firestore from '../mocks/firestore'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Checkout', () => {

    const store = new Vuex.Store({
        commit: jest.fn(),
        state:{
            user:{
                uid: "123"
            }
        },
        modules:{
            cart:{
                state:{
                    items: [],
                    total: 0,
                    totalWeight: 0,
                    totalQty: 0
                },
                mutations:{
                    'cart/empty': jest.fn()
                }
            }
        }
    });

    const data = {
        boxes: []
    }

    const $fireModule = {
        firestore: {
            Timestamp: {
                now: jest.fn(() => new Date())
            }
        }
    }

    const $fire = { firestore };
    const mocks = { $fire, $router, data, $fireModule };
    let stubs = ['NuxtLink'];
    const options = { mocks, stubs, localVue, store };

    beforeEach(() => { jest.clearAllMocks(); });

    test('is a Vue instance', () => {
        const wrapper = shallowMount(checkout, options);
        expect(wrapper.vm).toBeTruthy();
    });

    test("Submits an order when the button was clicked", async() => {
        const wrapper = shallowMount(checkout, options);
        const orderSpy = jest.spyOn(wrapper.vm, 'createOrder');
        wrapper.find('button').trigger('click');
        wrapper.vm.$forceUpdate();
        expect(orderSpy).toHaveBeenCalled();
    });
});
