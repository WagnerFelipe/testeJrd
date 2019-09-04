import axios from 'axios'

const paredao = {}

paredao.obterTodos = () => axios.get('/paredao')

paredao.votar = (data) => axios.post('/paredao/votar', data)

export default paredao
