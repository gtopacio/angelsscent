import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import _slug from '../../../pages/product/_slug.vue'
import * as $router from '@/test/mocks/router'
import * as firestore from '@/test/mocks/firestore'
import * as auth from '../../mocks/auth'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Product', () => {

    const data = {
      img:"https://firebasestorage.googleapis.com/v0/b/angelsscent-dev.appspot.com/o/babiel.jpg?alt=media&token=c2804920-8d63-4872-ac16-6d972b5d88cb",
      name:"a",
      price:1,
      description:"a",
      weight:1,
      length:1,
      width:1,
      height:1,
      qty:1,
      productReviews:[{
          id:1,
          name:"a",
          rating:1,
          review:"a"
      }],
      test:true
    };
    const product = [{
        id:1,
        name:"a",
        rating:1,
        review:"a"
    }];

    const store = new Vuex.Store({
        commit: jest.fn(),
        state:{
            user:{
                uid: "Temp UID",
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

    test("Product Added", async() => {
        const wrapper = shallowMount(_slug, options);
        const productSpy = jest.spyOn(wrapper.vm, 'addToCart');
        const qtySpy = jest.spyOn(wrapper.vm, 'checkQty');
        wrapper.find('#addButton').trigger('click');
        expect(productSpy).toHaveBeenCalled();
        expect(qtySpy).toHaveBeenCalled();
    });

    test("Watch", async() => {
        const wrapper = shallowMount(_slug, options);
        wrapper.vm.$options.watch.qty.call(wrapper.vm, 0, 0);
        _slug.watch.isDone;
    });

    test("Check Qty", async() => {
        window.alert = () => {};
        const wrapper = shallowMount(_slug, options);
        const qtySpy = jest.spyOn(wrapper.vm, 'checkQty');
        wrapper.setData({qty:5});
        wrapper.find('#addButton').trigger('click');
        expect(qtySpy).toHaveBeenCalled();
    });

    window.alert = () => {};
    jest.spyOn(console, 'error').mockImplementation(() => {});

    test("Add to Cart Error", async() => {
        options.mocks.$fire = null;
        const wrapper = shallowMount(_slug, options);
        const productSpy = jest.spyOn(wrapper.vm, 'addToCart');
        const qtySpy = jest.spyOn(wrapper.vm, 'checkQty');
        wrapper.find('#addButton').trigger('click');
        expect(productSpy).toHaveBeenCalled();
        expect(qtySpy).toHaveBeenCalled();
    });

});
