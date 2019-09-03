<template>
    <div class="participantesWrapper">
        <div class="participantes">
            <div class="participante">
                <span>Participante 1</span>
                <div class="participanteImage">
                    <img src="./../assets/participante1.png">
                </div>
                <span>Para eliminar o <strong>Participante 1</strong> pelo telefone disque <strong>0800-123-0001</strong> ou manda um SMS para <strong>8001</strong></span>
            </div>

            <div class="participante">
                <span>Participante 2</span>
                <div class="participanteImage selected">
                    <img src="./../assets/participante2.png">
                </div>
                <span>Para eliminar o <strong>Participante 2</strong> pelo telefone disque <strong>0800-123-0002</strong> ou manda um SMS para <strong>8002</strong></span>
            </div>

        </div>
        <div class="mainBoxFooter">
            <button>Envie seu voto agora</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SendVote"
    }
</script>

<style scoped>
.participantes {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 15px 15px;
    width: 520px;
}

.participante {
    width: 250px;
}

.participanteImage {
    border: 1px solid #d7d7d7;
    width: 250px;
    height: 250px;
    margin: 10px 0;
}

.participanteImage.selected {
    border: 2px solid #f09c20;
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
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
}

</style>
