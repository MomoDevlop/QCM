<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numIncorrect=" numIncorrect "/>
    <b-container><br>
      <b-row>
        <b-col>
          <QuestionBox
            v-if="questions.length"
            :currentQuestion ="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Data from './assets/data.json'
import Header from './components/Header'
import QuestionBox from './components/QuestionBox'

export default {
  name: 'app',
  components: {
    Header,
    QuestionBox
  },
  //prop
  
  data(){
    return{
      questions:[],
      index:0,
      numCorrect:0,
      numIncorrect:0,
    }
  },
  methods:{
    next(){console.log(this.index);
      if(this.index > this.questions.length ){
        alert('Vous avez terminer le QCM ')
      }else this.index++
    },
    increment(isCorrect){
      
      if(isCorrect){console.log('increment');
        this.numCorrect++
      }else 
      this.numIncorrect++
    }
  },
  mounted: function(){
    return this.questions=Data.results
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
