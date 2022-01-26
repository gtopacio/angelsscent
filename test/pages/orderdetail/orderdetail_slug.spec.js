import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import _slug from '../../../pages/orderdetail/_slug.vue'
import * as $router from '@/test/mocks/router'
import * as firestore from '@/test/mocks/firestore'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Order Detail', () => {

    const data = {
      paymentStatus:"Paid",
      orderStatus:"Pending",
      total:1,
      shippingPrice:1,
      grandTotal:1,
      name:"a",
      address:"a",
      contactNo:"123",
      email:"a@a.com",
      items:[]
    };
    const order = [{
        productid:1,
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

    test("Order Cancelled", async() => {
        const wrapper = shallowMount(_slug, options);
        const orderSpy = jest.spyOn(wrapper.vm, 'cancelOrder');
        wrapper.find('#cancelButton').trigger('click');
        expect(orderSpy).toHaveBeenCalled();
    });

});
