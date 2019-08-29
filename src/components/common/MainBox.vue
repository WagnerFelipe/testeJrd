<template>
    <div class="mainBoxContainer">
        <div class="mainBox">
            <div class="mainBoxContent">
                <div class="mainBoxContentHeader">
                    <img src="./../../assets/yellowBall.png" width="36" height="35">
                    <p>QUEM DEVE SER <strong>ELIMINADO</strong>?</p>
                </div>
                <div class="separator"></div>
                <slot></slot>
            </div>
            <div class="mainBoxFooter">
                <button>Envie seu voto agora</button>
            </div>
        </div>

        <div class="closeBtn">
            X
        </div>

    </div>
</template>

<script>
    export default {
        name: "MainBox"
    }
</script>

<style scoped>
.mainBoxContainer {
    position: relative;
}

.mainBox {
    width: 600px;
    height: 600px;
    border: 2px solid #d7d7d7;
    position: relative;
    border-radius: 5px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.mainBox:after {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    background: #eaeaea;
    z-index: -1;
    border-radius: 5px;
}

.closeBtn {
    border-top: 2px solid #d7d7d7;
    border-right: 2px solid #d7d7d7;
    display: inline-block;
    padding: 5px 8px;
    border-radius: 50%;
    position: absolute;
    background-color: #ffffff;
    right: -13px;
    top: -13px;
}

.closeBtn:after {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    background: #eaeaea;
    z-index: -1;
    border-radius: 50%;
}

    .mainBoxContent {
        padding: 15px;
    }

    .mainBoxContentHeader {
        display: flex;
        justify-content: center;
        align-items: center;
    }

.separator {
    background-image: url("./../../assets/headerBorderDetail.png");
    width: 100%;
    height: 9px;
    margin-top: 15px;
}

    .mainBoxFooter {
        background-color: #f5f5f5;
        border-top: 1px solid #d7d7d7;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.mainBoxFooter > button{
    background-color: #007fde;
    color: #ffffff;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
}
</style>
