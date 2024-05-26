<template>
  <div class="readingTips">
    <span class="text-[36px] my-[25px] font-black text-center flex flex-row justify-center w-[100%]">Reading <span
        class="text-[#FAFF00]">TIPS</span></span>
        <RouterLink to="/IELTS_tips">
      <div class="home cursor-pointer top-[35px] left-[25px] absolute"><img class="w-[40px] rotate-[180deg]" src="../assets/arrow.png"
          alt=""></div>
    </RouterLink>
      <div class="main px-[25px]">
        <div class="tips p-[15px] rounded-[15px]">
          <div class="tip" v-for="i of this.ReadingTips" :key="i.id">
            <div class="tipInside" v-if="i.unlocked">
              <span class="block inde w-[60px] h-[60px] my-[10px] rounded-[50%] text-[30px] flex flex-row justify-center items-center">{{ this.ReadingTips.indexOf(i) + 1 }}</span>
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
            ReadingTips: [
              {
                tip: "Improve your learning by doing our PRACTICE materials",
                color: '#00FFF0',
                unlocked: true,
              },
              {
                tip: "Look out for the title, headings and any special features such as capital letters, underlining, italics, figures, graphs and tables.",
                color: "#00FF57",
                unlocked: true,
              },
              {
                tip: "Do not spend too long on one passage or question",
                color: "#FAFF00",
                unlocked: true,
              },
              {
                tip:  "The words you use must be taken from the Reading text",
                color: "#FF0000",
                unlocked: false,
              },
              {
                tip: "You must not change the information or the form of the word in the text",
                color: "#FF00F5",
                unlocked: false,
              },
              {
                tip:  "Check your spelling",
                color: "#4200FF",
                unlocked: false,
              },
            ],
        };
    },

    mounted() {
        let a = document.getElementsByClassName('inde')
        for(let i of a){
            i.style.border= '6px solid' + this.ReadingTips[i.innerHTML - 1].color
            i.style.color=this.ReadingTips[i.innerHTML - 1].color
        } 
    },

    methods: {

    },
};
</script>
<style scoped>
.tips{
  background: #d8d8d82a;
}
.unlockMore{
  background: #377bf9;
}
</style>
