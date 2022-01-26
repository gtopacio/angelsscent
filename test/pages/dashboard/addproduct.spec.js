import { shallowMount } from '@vue/test-utils'
import addproduct from '@/pages/dashboard/addproduct.vue'
import * as $router from '../../mocks/router'
import * as firestore from '../../mocks/firestore'

describe('Addproduct', () => {

    beforeEach(() => { jest.clearAllMocks(); });

    const $fire = { firestore }
    const mocks = { $fire, $router, document };
    let stubs = ['DashboardNavbar'];
    const options = { mocks, stubs, attachTo: document.body };

  test('is a Vue instance', () => {
    const wrapper = shallowMount(addproduct, { stubs: ['DashboardNavbar'] });
    expect(wrapper.vm).toBeTruthy();
  });

  test("submits form", async() => {
    const wrapper = shallowMount(addproduct, options);
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });

  test("does not upload image when filename is empty", async() => {
    const wrapper = shallowMount(addproduct, options);
    const fileSpy = jest.spyOn(wrapper.vm, 'uploadImage').mockImplementation();
    await wrapper.find('#formFile').setValue("");
    expect(fileSpy).not.toHaveBeenCalled();
  });
  /*
  test("upload image", async() => {
    const wrapper = shallowMount(addproduct, options);
    const fileSpy = jest.spyOn(wrapper.vm, 'uploadImage').mockImplementation(()=>null);
    await wrapper.find('#formFile').setValue("asd.png");
    expect(fileSpy).toHaveBeenCalled();
  });
  */

  window.alert = () => {};
  jest.spyOn(console, 'error').mockImplementation(() => {});

  test("submit error", async() => {
    options.mocks.$fire = null;
    const wrapper = shallowMount(addproduct, options);
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });
});
