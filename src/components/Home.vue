<template>
  <div class="hello">
    <MainBox>
      <SendVote></SendVote>
    </MainBox>
  </div>
</template>

<script>
import SendVote from "./SendVote";
import MainBox from "./common/MainBox";

export default {
  name: 'Home',
  components: {
    SendVote,
    MainBox
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
