import { shallowMount } from '@vue/test-utils'
import addproduct from '@/pages/dashboard/addproduct.vue'
import * as $router from '../../mocks/router'
import * as firestore from '../../mocks/firestore'

describe('Addproduct', () => {

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(addproduct, { stubs: ['DashboardNavbar'] });
    expect(wrapper.vm).toBeTruthy();
  });

  test("submits form", async() => {
    const $fire = { firestore }
    const mocks = { $fire, $router, document };
    const wrapper = shallowMount(addproduct, { mocks, stubs: ['DashboardNavbar'], attachTo: document.body });
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });

  test("does not upload image when filename is empty", async() => {
    const $fire = { firestore }
    const mocks = { $fire, $router, document };
    const wrapper = shallowMount(addproduct, { mocks, stubs: ['DashboardNavbar'], attachTo: document.body });
    const fileSpy = jest.spyOn(wrapper.vm, 'uploadImage').mockImplementation();
    await wrapper.find('#formFile').setValue("");
    expect(fileSpy).not.toHaveBeenCalled();
  });
});
