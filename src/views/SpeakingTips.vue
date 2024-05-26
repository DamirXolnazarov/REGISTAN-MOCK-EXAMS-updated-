<template>
  <div class="readingTips">
    <span class="text-[36px] my-[25px] font-black text-center flex flex-row justify-center w-[100%]">Speaking <span
        class="text-[#FAFF00]">TIPS</span></span>
        <RouterLink to="/IELTS_tips">
      <div class="home cursor-pointer top-[35px] left-[25px] absolute"><img class="w-[40px] rotate-[180deg]" src="../assets/arrow.png"
          alt=""></div>
    </RouterLink>
      <div class="main px-[25px]">
        <div class="tips p-[15px] rounded-[15px]">
          <div class="tip" v-for="i of this.SpeakingTips" :key="i.id">
            <div class="tipInside" v-if="i.unlocked">
              <span class="block inde w-[60px] h-[60px] my-[10px] rounded-[50%] text-[30px] flex flex-row justify-center items-center">{{ this.SpeakingTips.indexOf(i) + 1 }}</span>
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
            SpeakingTips: [
              {
                tip: "Improve your learning by doing our PRACTICE materials",
                color: '#00FFF0',
                unlocked: true,
              },
              {
                tip: "Use natural spoken English",
                color: "#00FF57",
                unlocked: true,
              },
              {
                tip: "Correct yourself in case of mistake",
                color: "#FAFF00",
                unlocked: true,
              },
              {
                tip:  "Listen to the grammar in the question",
                color: "#FF0000",
                unlocked: false,
              },
              {
                tip: "Speak clearly and do not worry about your accent",
                color: "#FF00F5",
                unlocked: false,
              },
              {
                tip:  "Explain names or words which are in another language. Stay on topic.",
                color: "#4200FF",
                unlocked: false,
              },
            ],
        };
    },

    mounted() {
        let a = document.getElementsByClassName('inde')
        for(let i of a){
            i.style.border= '6px solid' + this.SpeakingTips[i.innerHTML - 1].color
            i.style.color=this.SpeakingTips[i.innerHTML - 1].color
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
