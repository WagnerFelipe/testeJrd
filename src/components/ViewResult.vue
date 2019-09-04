<template>
    <div class="sendVoteContainer">
        <p><strong>Parabéns!</strong> Seu voto para <strong>{{ resultado.participante }}</strong> foi enviado com sucesso.</p>
        <div class="sendVoteContent">
            <div class="participantes">
                <div>
                    <img src="./../assets/participante1.png">
                </div>
                <div>
                    <img src="./../assets/participante2.png">
                </div>
            </div>
            <div class="chartContainer">
                <div class="chart">
                    <div class="chartIndicator">

                    </div>
                    <div class="chartText">
                        <div class="chartTextContent">
                            <p>FALTAM</p>
                            <p class="horas">{{ days }} dia(s) e {{ hours }}:{{ minutes }}:{{ seconds }}</p>
                            <p class="txt-encerramento">PARA ENCERRAR A VOTAÇÃO </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ViewResult",
        props: {
            resultado: {
                type: Object
            }
        },
        data () { 
            return {
                days: null,
                hours: null,
                minutes: null,
                seconds: null,
                isEnded: null
            }
        },
        methods: {
            updateRemaining (distance) {
                this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
                this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                // this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)))
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
            },            
            tick () {
                const dtFim = new Date(this.resultado.paredaoFim)
                const currentTime = new Date()
                const distance = Math.max(dtFim - currentTime, 0)
                this.updateRemaining(distance)
                
                if (distance === 0) {
                    clearInterval(this.timer)
                    this.isEnded = true
                }
            }
        },
        
        mounted () {
            this.tick()
            this.timer = setInterval(this.tick.bind(this), 1000)
        },
    }
</script>

<style scoped>
    .sendVoteContainer p {
        padding: 15px;
        margin: auto;
        font-size: 1.1rem;
    }

    .sendVoteContent {
        position: relative;
        width: 620px;
    }

    .sendVoteContainer {
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }

    .participantes {
        display: flex;
        justify-content: space-between;
    }

    .chartContainer {
        position: absolute;
        bottom: 0;
        height: 240px;
        width: 250px;
        left: calc(50% - 125px);
        overflow: hidden;
        -webkit-clip-path: circle(120px at 50% 71%);
        clip-path: circle(120px at 50% 71%);
    }

    .chart {
        background-color: #d7d7d7;
        width: 250px;
        height: 250px;
    }

    .chartIndicator {
        background-color: #f09c20;
        width: 200px;
        height: 200px;
        position: absolute;
        left: calc(50% - 50px);
        bottom: -330px;
        transform-origin: top right;
        transform: rotate(70deg);
    }

    .chartText {
        background-color: #ffffff;
        width: 180px;
        height: 180px;
        position: absolute;
        bottom: -23px;
        left: calc(50% - 90px);
        border-radius: 50%;       
    }

    .chartTextContent {
        margin-top: 35px;
        color: #9d9d9d;
    }

    .chartTextContent p {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
    }

    .chartTextContent p.txt-encerramento {
        font-size: 11px;
    }

    .chartTextContent p.horas {
        color: #f09c20;
        font-size: 23px;
        margin: 5px 0;
    }

</style>
