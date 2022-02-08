import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import info from '@/pages/account/info.vue'
import * as $router from '@/test/mocks/router'
import * as firestore from '@/test/mocks/firestore'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Info', () => {

    const data = {};

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
    const mocks = { $fire, $router, data };
    let stubs = ['NuxtLink', 'AccountNavbar', 'EditProfile', 'EditShipping'];
    const options = { mocks, stubs, localVue, store };

    beforeEach(() => { jest.clearAllMocks(); });

    test('is a Vue instance', () => {
        const wrapper = shallowMount(info, options);
        expect(wrapper.vm).toBeTruthy();
    });
});
