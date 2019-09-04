<template>
  <div class="hello">
    <MainBox>
      <SendVote />
      <ViewResult />
    </MainBox>
  </div>
</template>

<script>
import SendVote from "./SendVote"
import MainBox from "./common/MainBox"
// import ViewResult from "./ViewResult"

export default {
  name: 'Home',
  components: {
    SendVote,
    MainBox,
    // ViewResult
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
