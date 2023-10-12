<template>
  <div id="chat">
    <div class="presentation">
      <h1>T-GPT</h1>
      <p>¡Obtén respuestas ilimitadas por ChatGPT!</p>
    </div>

    <form>
      <img src="../../public/t-gpt.png" alt="T-GPT">
      <input type="text" name="question" id="question">
    </form>

    <input type="button" value="Buscar" id="get-answer">

    <div class="answer">
      <div class="default">
        <p class="default-text">Aquí se muestra tu futura respuesta.</p>
        <img src="../../public/t-gpt.png" alt="T-GPT" class="default-img">
      </div>
    </div>
  </div>
</template>

<script>
import { getAnswerGPT } from '@/services/chatServices';

export default {
  name: 'ChatView',
  mounted(){
    const btn = document.getElementById('get-answer');
    btn.addEventListener('click', async() => {
      let question = document.getElementById('question').value
      let ans = await getAnswerGPT(question)
      const divAnswer = document.querySelector('.answer')
      divAnswer.innerHTML = ans
      console.log(ans)
    });
  }
}
</script>

<style scoped lang="sass">
#chat
  display: flex
  flex-direction: column
  align-items: center
  gap: 2rem

  .presentation
    text-align: center

    h1
      font-size: 3rem
      font-weight: 900
      margin-bottom: 0
    
    p
      font-size: 1.25rem
      font-weight: 500
      margin-bottom: 0
    
  form
    @include set-size($width: calc(40rem - 1rem), $height: 2.5rem)
    padding-left: 0.5rem
    padding-right: 0.5rem
    border: solid 1px lightgreen
    border-radius: 0.5rem
    display: flex
    flex-direction: row
    align-items: center

    img
      @include set-size($width: 1.5rem, $height: 1.5rem)
      margin-right: 0.5rem
    
    #question
      @include set-size($width: 37rem, $height: 2rem)
      border: 0
      font-size: 1rem
      background-color: rgba(0, 0, 0, 0)

      &:focus-visible
        outline: 0
    
  #get-answer
    @include set-size($width: 6rem, $height: 2rem)
    border: 0
    border-radius: 1rem
    background-color: $btn-primary-color
    text-align: center
    font-weight: 700

    &:hover
      cursor: pointer
      background-color: $btn-secondary-color
  
  .answer
    @include set-size($width: calc(40rem - 4rem), $height: auto)
    padding: 2rem
    background-color: $background-secondary-color
    border: 0
    border-radius: 1rem

    .default
      display: flex
      flex-direction: row
      align-items: center

      .default-img
        @include set-size($width: 9rem, $height: 9rem)
      
      .default-text
        font-size: 1.3rem
        font-weight: 600

</style>