<template>
  <div class="hello">
    <MainBox :btnFechar="votou" v-on:exibirVotacao="exibirVotacao" >
      <SendVote v-if="!votou" v-on:enviouVoto="exibirResultado" />
      <ViewResult v-else :resultado="resultado" />
    </MainBox>
  </div>
</template>

<script>
import SendVote from "./SendVote"
import MainBox from "./common/MainBox"
import ViewResult from "./ViewResult"

export default {
  name: 'Home',
  components: {
    SendVote,
    MainBox,
    ViewResult
  },
  data () {
      return {
          votou: false,
          resultado: {
            paredaoFim: '',
            participante: ''
          }
      }
  },
  methods: {
      exibirResultado(paredaoFim, participante) {
          this.votou = !this.votou
          this.resultado = { paredaoFim, participante }
      },
      exibirVotacao() {
          this.votou = !this.votou
      }
  }
}
</script>

<style scoped>
  .hello {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
