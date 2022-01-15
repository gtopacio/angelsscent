import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import orderlist from '../../../pages/account/orderlist'
import * as $router from '@/test/mocks/router'
import * as firestore from '@/test/mocks/firestore'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('orderlist', () => {

    const data = {};
    const orders = [{
        id:1,
        dateOrdered: {toDate: jest.fn(() => { return new Date(); })},
        paymentStatus: '',
        orderStatus: '',
        grandTotal: 0
    }];

    const store = new Vuex.Store({
        commit: jest.fn(),
        state:{
            user:{
                uid: "123",
                fname: "fname",
                lname: "lname"
            }
        }
    });

    const $fire = { firestore };
    const mocks = { $fire, $router, data, orders };
    let stubs = ['NuxtLink', 'AccountNavbar', 'EditProfile', 'EditShipping'];
    const options = { mocks, stubs, localVue, store };

    beforeEach(() => { jest.clearAllMocks(); });

    test('is a Vue instance', () => {
        const wrapper = shallowMount(orderlist, options);
        expect(wrapper.vm).toBeTruthy();
    });

    test("Goes to an order when clicked", async() => {
        const wrapper = shallowMount(orderlist, options);
        const orderSpy = jest.spyOn(wrapper.vm, 'goToDetails');
        wrapper.find('#goTo1').trigger('click');
        expect(orderSpy).toHaveBeenCalled();
    });
});
