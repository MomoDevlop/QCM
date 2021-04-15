<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled><b>Quiz App</b></b-nav-item>
            <b-nav-item disabled><b>Time:</b></b-nav-item>
            <b-nav-item disabled> Correct : {{ numCorrect }} / Incorrect : {{ numIncorrect }} </b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    props:[
        'numCorrect',
        'numIncorrect'
    ]
}
</script>

<style>
    
</style>