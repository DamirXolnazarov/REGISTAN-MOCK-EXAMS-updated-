<script setup>
import Tips from '@/components/Tips.vue';
</script>
<template>
  <div class="listeningTips ">
    <img class="headphone w-[50px] top-[9px] absolute right-[65px]" src="../assets/headphone.png" alt="">
    <span class="text-[36px] my-[25px] font-black text-center flex flex-row justify-center w-[100%]">Listening <span
        class="text-[#FAFF00]">TIPS</span></span>
    <RouterLink to="/IELTS_tips">
      <div class="home cursor-pointer top-[35px] left-[25px] absolute"><img class="w-[40px] rotate-[180deg]" src="../assets/arrow.png"
          alt=""></div>
    </RouterLink>
      <div class="main px-[25px]">
        <div class="tips px-[15px] rounded-[15px]">

<!-- asdasdasd --><Tips v-for="i of this.ListeningTips" :key="i.id" :index="i.index" :section="i.section" :backgroundColor="i.color" :tip="i.tip"/>

          <div class="unlockMore mt-[10px] flex py-[15px] flex-col items-center border-[1.5px] rounded-[15px]">
            <span class="text-[70px]">?</span>
            <span class="">to unlock <a class="text-[white]">More</a></span>
          </div>
        </div>
        <div class="practiceMaterials pt-[15px]">
          <span class="text-[40px] flex flex-row justify-center">Practice Materials</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            ListeningTips: [
              {
                tip: "Improve your learning by doing our PRACTICE materials",
                color: 'orange',
                index: '01',
                unlocked: true,
                section: 'LISTENING',
              },
              {
                tip: "In your listening test, use the example at the beginning of the first section to familiarise yourself with the voice, situation, and speakers.",
                color: "#FDC100",
                unlocked: true,
                index: '02',
                section: 'LISTENING',
              },
              {
                tip: "Keep listening until the recording stops, looking ONLY at the questions that relate to the part being played. If you look at the questions first and then listen to the record, you would be ready to extract information from the recording.",
                color: "#FED811",
                unlocked: true,
                index: '03',
                section: 'LISTENING',
              },
              {
                tip:  "There are often pauses in the recording between different sections. Use these to prepare for the next set of questions. If you do nothing during this time, you would find it hard to answer the questions if the speaking is fast.",
                color: "#B4FFFF",
                unlocked: false,
                index: '04',
                section: 'LISTENING',
              },
              {
                tip: "Answer questions in the order they appear on the question paper. Remember that they normally follow the order of the information in the recording. Even if there are some exceptions, following this strategy would help you greatly.",
                color: "#02CECB",
                unlocked: false,
                index: '05',
                section: 'LISTENING',
              },
              {
                tip:  "At the end of the recording, you have some time to transfer your answers to the Answer Sheet. Check your grammar and spelling as you do so. Remember, a misspelt or grammatically incorrect answer would not carry any marks for you. ",
                color: "#06837F",
                unlocked: false,
                index: '06',
                section: 'LISTENING',
              },
            ],
        };
    },

    mounted() {
        let a = document.getElementsByClassName('inde')
        for(let i of a){
            i.style.border= '6px solid' + this.ListeningTips[i.innerHTML - 1].color
            i.style.color=this.ListeningTips[i.innerHTML - 1].color
        } 
    },

    methods: {

    },
};
</script>
<style scoped>

.headphone {
  transform: rotate(45deg);
}
.unlockMore{
  background: #377bf9;
}
</style>
