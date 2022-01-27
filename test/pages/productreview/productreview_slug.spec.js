import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import _slug from '../../../pages/productreview/_slug.vue'
import * as $router from '@/test/mocks/router'
import * as firestore from '@/test/mocks/firestore'
import * as auth from '../../mocks/auth'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Product', () => {

    const data = {
      name:"a",
      id:1,
      items:[{
          productid:1,
          id:1,
          name:"a",
          weight:1
      }]
    };
    const product = [{
        productid:1,
        id:1,
        name:"a",
        weight:1
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

    const $fire = { firestore, auth };
    const mocks = { $fire, $router, data, product };
    let stubs = ['NuxtLink', 'DashboardNavbar'];
    const options = { mocks, stubs, localVue, store };

    beforeEach(() => { jest.clearAllMocks(); });

    test('is a Vue instance', () => {
        const wrapper = shallowMount(_slug, options);
        expect(wrapper.vm).toBeTruthy();
    });

    test("Product Review", async() => {
        const wrapper = shallowMount(_slug, options);
        await wrapper.find('form').trigger('submit');
        expect(wrapper.emitted()).toHaveProperty('submit');
    });

});
