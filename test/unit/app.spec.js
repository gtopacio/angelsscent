import { mount } from '@vue/test-utils';
const Cart = require('../pages/cart');
const Counter = {
  template: `
    <div>
      <button @click="count++" class="plus">Add up</button>
      <input type="number" value="0" class="quantity"></input>
    </div>
  `,
  data() {
    return { count: 0 }
  }
}


test('increments counter value on click', async () => {
  const wrapper = mount(Counter);
  const button = wrapper.find('.plus');
  const text = wrapper.find('.quantity');

  expect(text.element.value).toContain('0');

  await button.trigger('click');

  expect(text.element.value).toContain('1');
})
