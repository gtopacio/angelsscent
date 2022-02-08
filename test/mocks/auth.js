let initial = {
    uid: "Temp UID",
    email: "temporary@temp.com",
    password: "123"
};

let user = initial;

let mockData = { user };
let currentUser = user;

const setData = (d) => { user = d; };
const resetData = () => { user = initial };
const signOut = jest.fn();

const signInWithEmailAndPassword = jest.fn(() => { return Promise.resolve(mockData) });

const createUserWithEmailAndPassword = jest.fn(() => { 
    return Promise.resolve( {
        user: {
            uid: '',
            email: '',
            contactNo: '',
            password:'',
            fName: '',
            lName: '',
            streetAdd: '',
            city: '',
            province: '',
            region: '',
            zipcode: ''
        }
    } );
 });

export { setData, resetData, signInWithEmailAndPassword, signOut, currentUser, createUserWithEmailAndPassword };
