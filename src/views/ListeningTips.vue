<template>
  <div class="listeningTips">
    <img class="headphone w-[50px] top-[9px] absolute right-[65px]" src="../assets/headphone.png" alt="">
    <span class="text-[36px] my-[25px] font-black text-center flex flex-row justify-center w-[100%]">Listening <span
        class="text-[#FAFF00]">TIPS</span></span>
    <RouterLink to="/IELTS_tips">
      <div class="home cursor-pointer top-[35px] left-[25px] absolute"><img class="w-[40px]" src="../assets/home.png"
          alt=""></div>
    </RouterLink>
      <div class="main px-[25px]">
        <div class="tips p-[15px] rounded-[15px]">
          <div class="tip" v-for="i of this.ListeningTips" :key="i.id">
            <div class="tipInside" v-if="i.unlocked">
              <span class="block inde w-[60px] h-[60px] my-[10px] rounded-[50%] text-[30px] flex flex-row justify-center items-center">{{ this.ListeningTips.indexOf(i) + 1 }}</span>
              <span class="text-[black]">{{ i.tip }}</span>
            </div>
          </div>
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
                color: '#00FFF0',
                unlocked: true,
              },
              {
                tip: "In your listening test, use the example at the beginning of the first section to familiarise yourself with the voice, situation, and speakers.",
                color: "#00FF57",
                unlocked: true,
              },
              {
                tip: "Keep listening until the recording stops, looking ONLY at the questions that relate to the part being played. If you look at the questions first and then listen to the record, you would be ready to extract information from the recording.",
                color: "#FAFF00",
                unlocked: true,
              },
              {
                tip:  "There are often pauses in the recording between different sections. Use these to prepare for the next set of questions. If you do nothing during this time, you would find it hard to answer the questions if the speaking is fast.",
                color: "#FF0000",
                unlocked: false,
              },
              {
                tip: "Answer questions in the order they appear on the question paper. Remember that they normally follow the order of the information in the recording. Even if there are some exceptions, following this strategy would help you greatly.",
                color: "#FF00F5",
                unlocked: false,
              },
              {
                tip:  "At the end of the recording, you have some time to transfer your answers to the Answer Sheet. Check your grammar and spelling as you do so. Remember, a misspelt or grammatically incorrect answer would not carry any marks for you. ",
                color: "#4200FF",
                unlocked: false,
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
.tips{
  background: #d8d8d82a;
}
.unlockMore{
  background: #377bf9;
}
</style>
