import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import _slug from '../../../../pages/dashboard/orderdetail/_slug.vue'
import * as $router from '@/test/mocks/router'
import * as firestore from '@/test/mocks/firestore'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Order Detail', () => {

    const data = {
      total:1,
      shippingPrice:1,
      grandTotal:1
    };
    const order = [{
        id:1,
        name:"a",
        weight:1,
        qty:1,
        price:1,
        subtotal:1
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
    const mocks = { $fire, $router, data, order };
    let stubs = ['NuxtLink', 'DashboardNavbar'];
    const options = { mocks, stubs, localVue, store };

    beforeEach(() => { jest.clearAllMocks(); });

    test('is a Vue instance', () => {
        const wrapper = shallowMount(_slug, options);
        expect(wrapper.vm).toBeTruthy();
    });

    test("Payment Status Changed", async() => {
        const wrapper = shallowMount(_slug, options);
        const orderSpy = jest.spyOn(wrapper.vm, 'changePaymentStatus');
        wrapper.find('#dropdownMenuButton1').trigger('click');
        wrapper.find('#changePaymentStatus1').trigger('click');
        expect(orderSpy).toHaveBeenCalled();
    });

    test("Order Status Changed", async() => {
        const wrapper = shallowMount(_slug, options);
        const orderSpy = jest.spyOn(wrapper.vm, 'changeOrderStatus');
        wrapper.find('#dropdownMenuButton2').trigger('click');
        wrapper.find('#changeOrderStatus1').trigger('click');
        expect(orderSpy).toHaveBeenCalled();
    });

    test("Save Changes", async() => {
        const wrapper = shallowMount(_slug, options);
        const orderSpy = jest.spyOn(wrapper.vm, 'saveChanges');
        wrapper.find('#saveChanges').trigger('click');
        expect(orderSpy).toHaveBeenCalled();
    });

    window.alert = () => {};
    jest.spyOn(console, 'error').mockImplementation(() => {});

    test("Save Changes Error", async() => {
        options.mocks.$fire = null;
        const wrapper = shallowMount(_slug, options);
        const orderSpy = jest.spyOn(wrapper.vm, 'saveChanges');
        wrapper.find('#saveChanges').trigger('click');
        expect(orderSpy).toHaveBeenCalled();
    });

});
