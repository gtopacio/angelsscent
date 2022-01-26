import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import pendingorders from '../../../pages/dashboard/pendingorders.vue'
import * as $router from '@/test/mocks/router'
import * as firestore from '@/test/mocks/firestore'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Pending Orders', () => {

    const data = {};
    const pending = [{
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
    const mocks = { $fire, $router, data, pending };
    let stubs = ['NuxtLink', 'DashboardNavbar'];
    const options = { mocks, stubs, localVue, store };

    beforeEach(() => { jest.clearAllMocks(); });

    test('is a Vue instance', () => {
        const wrapper = shallowMount(pendingorders, options);
        expect(wrapper.vm).toBeTruthy();
    });

    test("Goes to a pending order when clicked", async() => {
        const wrapper = shallowMount(pendingorders, options);
        const orderSpy = jest.spyOn(wrapper.vm, 'goToDetails');
        wrapper.find('#goTo1').trigger('click');
        expect(orderSpy).toHaveBeenCalled();
    });
});
