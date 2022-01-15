import { shallowMount } from '@vue/test-utils'
import EditProfile from '@/components/EditProfile.vue'
import * as $router from '../mocks/router'
import * as firestore from '../mocks/firestore'

describe('EditProfile', () => {

    let propsData = {
        id: "1",
        fName: "Geralt", 
        lName: "Rivia", 
        email: "whitewolf@kaermorhen.com", 
        contactNo: "123123"
    };

    beforeEach(() => { jest.clearAllMocks(); });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(EditProfile, propsData);
    expect(wrapper.vm).toBeTruthy();
  });

  test("calls submit when submit button was clicked", () => {
    const $fire = { firestore };
    const mocks = {$fire, $router};
    const wrapper = shallowMount(EditProfile, {propsData, mocks});
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()).toHaveProperty('submit');
  });
});
