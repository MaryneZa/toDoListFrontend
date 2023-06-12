import {atom} from 'recoil';

const DataAtom = atom({
    key: 'data',
    default: {
        name : '',
        username: ''
    }
});

export {DataAtom}