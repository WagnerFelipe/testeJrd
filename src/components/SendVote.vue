<template>
    <div class="participantesWrapper">        
        <div class="participantes">
            <div class="participante" 
                v-for="(emparedado, i) in paredao.emparedados" :key="emparedado._id" 
                @click="selecionar(i)">
                <span class="nome">
                    {{emparedado.nome}}
                </span>
                <div class="participanteImage" v-bind:class="{ 'selected': emparedado.selecionado }">
                    <img :src="imagens[i]">
                </div>
                <span class="instrucoes">Para eliminar o <strong>{{ emparedado.nome }}</strong> pelo telefone disque <strong>0800-123-000{{i + 1}}</strong> ou manda um SMS para <strong>800{{i + 1}}</strong></span>
            </div>
        </div>

        <div class="mainBoxFooter" @click="enviarVoto">
            <button>Envie seu voto agora</button>
        </div>
    </div>
</template>

<script>
    import ParedaoService from './../http/ParedaoService'

    export default {
        name: "SendVote",
        data () {
            return {
                paredao: {},
                imagens: [
                    require('./../assets/participante1.png'),
                    require('./../assets/participante2.png')
                ]
            }
        },
        async created () {
            const paredoes = await ParedaoService.obterTodos()
            this.paredao = paredoes.data[0] // Pega o primeiro paredão apenas para exemplo
        },
        methods: {
            selecionar (i) {
                let emparedados = this.paredao.emparedados.map(e => {
                    e.selecionado = false
                    return e
                })
                emparedados[i].selecionado = true
                this.paredao.emparedados = emparedados
            },
            async enviarVoto () {
                const participanteSelecionado = this.paredao.emparedados.find(e => e.selecionado)

                await ParedaoService
                    .votar({ 
                        paredaoId: this.paredao._id, 
                        participanteId: participanteSelecionado.participanteId.toString()
                    })

                this.$emit('enviouVoto', this.paredao.fim, participanteSelecionado.nome)
            }
        }
    }
</script>

<style scoped>
.participantes {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 15px 15px;
    width: 580px;
}

.participante {
    width: 280px; 
    cursor: pointer;   
}

.participante > span.nome {
    color: #595959;
    font-size: 1.1rem;
    font-weight: bold;
}

.participante > span.instrucoes {
    font-size: 0.7rem;
    color: #9d9d9d;
}

.participante > span.instrucoes > strong {
    font-weight: bold;
}

.participanteImage {
    border: 1px solid #d7d7d7;
    width: 280px;
    height: 280px;
    margin: 10px 0;
}

.participanteImage > img {
    width: 280px;
    height: 280px;
}

.participanteImage.selected {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 5px solid #f09c20;
    border-radius: 3px;
}

.participanteImage.selected > img {
    width: 270px;
    height: 270px;
}

.mainBoxFooter {
    background-color: #f5f5f5;
    border-top: 1px solid #d7d7d7;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
    text-align: center;
}

.mainBoxFooter > button{
    background-color: #007fde;
    color: #ffffff;
    font-size: 0.9rem;
    border: none;
    padding: 12px 30px;
    border-radius: 5px;
    cursor: pointer;
}

</style>
