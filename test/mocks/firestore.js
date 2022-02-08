const initialData = { data: "Data" };
let data = initialData;
const snapshot = { data: () => { return data }, exists: true };

const get = jest.fn(() => { return Promise.resolve(snapshot) });
const set = jest.fn(() => { return Promise.resolve(); });
const deleteFunction = jest.fn(() => { return Promise.resolve(); });
const update = jest.fn(() => { return Promise.resolve(); });
const doc = jest.fn((id) => { return { id, delete: deleteFunction, update, get, set }});
const add = jest.fn(() => { return Promise.resolve(); });
const collection = jest.fn(() => { return { doc, add, where, get } });

const setData = (d) => { data = d };
const resetData = () => data = initialData;

const where = jest.fn(() => { return { get } });

export { collection, deleteFunction, where, update, get, setData, resetData };