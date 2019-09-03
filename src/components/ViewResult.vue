<template>
    <div class="sendVoteContainer">
        <p><strong>Parabéns!</strong> Seu voto para <strong>Participanete 1</strong> foi enviado com sucesso.</p>
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
                            <p class="horas">10:30:47</p>
                            <p>PARA ENCERRAR A VOTAÇÃO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ViewResult"
    }
</script>

<style scoped>
    .sendVoteContainer p {
        padding: 15px;
    }

    .sendVoteContent {
        position: relative;
        width: 520px;
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
        height: 200px;
        width: 200px;
        left: calc(50% - 100px);
        overflow: hidden;
        clip-path: circle(100px at 50% 70%);
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
        width: 160px;
        height: 160px;
        position: absolute;
        bottom: -20px;
        left: calc(50% - 80px);
        border-radius: 50%;
    }

    .chartTextContent {
        margin-top: 35px;
    }

    .chartTextContent p {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 14px;
     }

    .chartTextContent p.horas {
        color: #f09c20;
        font-size: 23px;
    }

</style>
