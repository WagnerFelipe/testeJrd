<template>
    <div class="mainBoxContainer">
        <div class="mainBoxContent">
            <div class="mainBoxHeaderWrapper">
                <div class="mainBoxContentHeader">
                    <img src="./../../assets/yellowBall.png" width="36" height="35">
                    <p>QUEM DEVE SER <strong>ELIMINADO</strong>?</p>
                </div>
                <div class="separator"></div>
            </div>
            <slot></slot>
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

.mainBoxContent {
    max-width: 700px;
    min-height: 400px;
    border: 2px solid #d7d7d7;
    position: relative;
    border-radius: 5px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
}

.mainBoxContent:after {
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

.mainBoxHeaderWrapper {
    padding: 15px;
}

.mainBoxContentHeader {
    display: flex;
    justify-content: center;
    align-items: center;
}

.mainBoxContentHeader p {
    margin-left: 10px;
    font-size: 1.4rem;
    color: #545454;
}

.separator {
    background-image: url("./../../assets/headerBorderDetail.png");
    width: 100%;
    height: 9px;
}
</style>
