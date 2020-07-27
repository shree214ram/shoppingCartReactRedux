import axios from 'axios'

const getList = () => {
        return  axios.get('http://localhost:3000/salad.json')
};

export {
    getList
}
