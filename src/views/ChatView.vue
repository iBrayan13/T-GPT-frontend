<template>
  <div id="chat">
    <div class="presentation">
      <h1>T-GPT</h1>
      <p>¡Obtén respuestas ilimitadas por ChatGPT!</p>
    </div>

    <div class="chatting">
      <form method="post">
        <img src="../../public/t-gpt.png" alt="T-GPT">
        <input type="text" name="question" id="question" placeholder="Escribe tu pregunta aquí..." required>
        <button type="submit" id="get-answer">Buscar</button>
      </form>

      <div class="answer">
        <p class="default">Aquí se muestra tu futura respuesta.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getAnswerGPT } from '@/services/chatServices';

async function chatHandler(question) {
  const divAnswer = document.querySelector('.answer')
  divAnswer.innerHTML = `
  <p style="display: flex; justify-content: center; align-items: center; font-size: 1.5rem; height: 10rem; font-weight: 600;">
    Obteniendo respuesta...
  </p>
  `
  let ans = await getAnswerGPT(question)
  divAnswer.innerHTML = `<p>${ans}</p>`
}

export default {
  name: 'ChatView',
  data(){
    return {chatHandler}
  },
  mounted(){
    let question = document.getElementById('question')

    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault()
      chatHandler(question.value)
    })
  }
}
</script>

<style scoped lang="sass">
@media (max-width: $big-max-screen-mobile)
  form
    @include set-size($width: calc(20rem - 1rem), $height: 2.5rem)

    img
      @include set-size($width: 1.5rem, $height: 1.5rem)

    #question
      @include set-size($width: 12rem, $height: 2rem)
      font-size: 1rem
    
    #get-answer
      @include set-size($width: 4rem, $height: 2rem)
      border-radius: 1rem
      font-size: 0.8rem
  
  .answer
    @include set-size($width: calc(20rem - 4rem), $height: auto)

    

@media (max-width: $small-max-screen-mobile)
  form
    @include set-size($width: calc(15rem - 1rem), $height: 2.5rem)

    img
      @include set-size($width: 1.5rem, $height: 1.5rem)

    #question
      @include set-size($width: 8rem, $height: 2rem)
      font-size: 1rem
    
    #get-answer
      @include set-size($width: 3rem, $height: 2rem)
      border-radius: 1rem
      font-size: 0.6rem
  
  .answer
    @include set-size($width: calc(15rem - 4rem), $height: auto)

    

@media (min-width: $small-min-screen)
  form
    @include set-size($width: calc(35rem - 1rem), $height: 2.5rem)

    img
      @include set-size($width: 1.5rem, $height: 1.5rem)

    #question
      @include set-size($width: 25rem, $height: 2rem)
      font-size: 1rem
    
    #get-answer
      @include set-size($width: 6rem, $height: 2rem)
      border-radius: 1rem
  
  .answer
    @include set-size($width: calc(35rem - 4rem), $height: auto)

    

@media (min-width: $medium-min-screen)
  form
    @include set-size($width: calc(45rem - 1rem), $height: 2.5rem)

    img
      @include set-size($width: 1.5rem, $height: 1.5rem)

    #question
      @include set-size($width: 35rem, $height: 2rem)
      font-size: 1rem
    
    #get-answer
      @include set-size($width: 6rem, $height: 2rem)
      border-radius: 1rem
  
  .answer
    @include set-size($width: calc(45rem - 4rem), $height: auto)

    

@media (min-width: $big-min-screen)
  form
    @include set-size($width: calc(55rem - 1rem), $height: 4rem)

    img
      @include set-size($width: 3rem, $height: 3rem)

    #question
      @include set-size($width: 42.5rem, $height: 3rem)
      font-size: 1.5rem
    
    #get-answer
      @include set-size($width: 7rem, $height: 3rem)
      border-radius: 1.5rem
      font-size: 1.1rem
  
  .answer
    @include set-size($width: calc(55rem - 4rem), $height: auto)

    

#chat
  display: flex
  flex-direction: column
  align-items: center

  .presentation
    text-align: center
    margin-bottom: 2rem

    h1
      font-size: 3rem
      font-weight: 900
      margin-bottom: 0
    
    p
      font-size: 1.25rem
      font-weight: 500
      margin-bottom: 0

  .chatting
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.4)
    border: 0
    margin-bottom: 1rem
    border-radius: 1rem

    form
      padding-left: 0.5rem
      padding-right: 0.5rem
      background-color: #ffffff
      border: solid 2px $btn-secondary-color
      border-radius: 0.5rem
      @include delete-border-radius($bottom-right: 'true', $bottom-left: 'true')
      display: flex
      flex-direction: row
      align-items: center

      img
        margin-right: 0.5rem
      
      #question
        margin-right: 0.5rem
        border: 0
        background-color: rgba(0, 0, 0, 0)

        &:focus-visible
          outline: 0
      
      #get-answer
        border: 0
        background-color: $btn-primary-color
        text-align: center
        font-weight: 700

        &:hover
          cursor: pointer
          background-color: $btn-secondary-color
    
    .answer
      padding: calc(2rem + 2px)
      background-color: $background-secondary-color
      border: 0
      border-radius: 1rem
      @include delete-border-radius($top-right: 'true', $top-left: 'true')

      .default
        @include set-size($width: auto, $height: 10rem)
        display: flex
        justify-content: center
        align-items: center
        font-size: 1.5rem
        font-weight: 600
</style>