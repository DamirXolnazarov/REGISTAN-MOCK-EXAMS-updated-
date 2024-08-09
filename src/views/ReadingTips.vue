<script setup>
import Tips from '@/components/Tips.vue';
import 'animate.css';
</script>
<template>
  <div class="readingTips relative" id="tap">
    <span class="text-[36px] my-[25px] font-black text-center flex flex-row justify-center w-[100%]">Reading <span
        class="text-[#FAFF00]">TIPS</span></span>
    <RouterLink to="/IELTS_tips">
      <div class="home cursor-pointer top-[35px] left-[25px] absolute"><img class="w-[40px] rotate-[180deg]"
          src="../assets/arrow.png" alt=""></div>
    </RouterLink>
    <div class="main px-[25px]">
      <div class="tips px-[15px] rounded-[15px]">

        <!-- asdasdasd -->
        <Tips @click="Extend(i)" v-for="i of this.ReadingTips" :key="i.id" :index="i.index" :section="i.section"
          :backgroundColor="i.color" :tip="i.tip" />

        <div class="unlockMore mt-[10px] flex py-[15px] flex-col items-center border-[1.5px] rounded-[15px]">
          <span class="text-[70px]">?</span>
          <span class="">to unlock <a class="text-[white]">More</a></span>
        </div>
      </div>
      <div class="practiceMaterials pt-[15px]">
        <span class="text-[40px] flex flex-row justify-center">Practice Materials</span>
      </div>
    </div>

    <div @click="disappear()" v-if="mark" class="inline leave fixed home cursor-pointer"><img
        class="w-[140px] rotate-[180deg]" src="../assets/arrow1.png" alt=""></div>
    <div
      class="extendedTip fixed flex flex-col justify-center items-center px-[25px] w-[100%] h-[100%] top-0 left-0 animate__repeat-none"
      :style="{ backgroundColor: bgColor, animationName: ani }" v-if="selected">
      <span class="index">{{ son }}</span>
      <span class="tip">{{ SelectedTip }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      selected: false,
      mark: false,
      SelectedTip: '',
      bgColor: '',
      son: '',
      ani: '',
      ReadingTips: [
        {
          tip: "Improve your learning by doing our ...",
          tip1: "Improve your learning by doing our PRACTICE materials",
          color: '#c0fdfb',
          section: 'READING',
          index: '01',
          unlocked: true,
        },
        {
          tip: "Look out for the title, headings and any ...",
          tip1: "Look out for the title, headings and any special features such as capital letters, underlining, italics, figures, graphs and tables.",
          color: "#64b6ac",
          unlocked: true,
          section: 'READING',
          index: '02',
        },
        {
          tip: "Do not spend too long on one passage or ...",
          tip1: "Do not spend too long on one passage or question",
          color: "#fad4c0",
          unlocked: true,
          index: '03',
          section: 'READING',
        },
        {
          tip: "The words you use must be taken from ...",
          tip1: "The words you use must be taken from the Reading text",
          color: "#fee9e1",
          unlocked: false,
          index: '04',
          section: 'READING',
        },
        {
          tip: "You must not change the information or ...",
          tip1: "You must not change the information or the form of the word in the text",
          color: "#f8e16c",
          unlocked: false,
          index: '05',
          section: 'READING',
        },
        {
          tip: "Check your spelling",
          tip1: "Check your spelling",
          color: "#b09e99",
          unlocked: false,
          index: '06',
          section: 'READING',
        },
      ],
    };
  },

  mounted() {
  },

  methods: {
    Extend(a) {
      if (event.target.classList[0] == 'back' || event.target.classList[0] == 'front' || event.target.classList[0] == 'total' || event.target.classList[0] == 'title' || event.target.classList[0] == 'text' || event.target.classList[0] == 'index') {
        document.documentElement.style.overflow = 'hidden'
        this.SelectedTip = a.tip1
        this.ani = 'bounceIn'
        this.bgColor = a.color
        this.son = a.index
        this.selected = true
        this.mark = true
      }
    },
    disappear() {
      this.ani = 'bounceOutLeft'
      this.mark = false
      document.documentElement.style.overflow = 'visible'
      setTimeout(() => {
        this.selected = false
      }, 2000);
    }
  },
};
</script>
<style scoped>
.leave {
  z-index: 999999999999 !important;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.headphone {
  transform: rotate(45deg);
}

.unlockMore {
  background: #377bf9;
}

.extendedTip {
  z-index: 999999999;
  animation-duration: 2s;
}

.index {
  font-size: 390px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: -1;
  -webkit-text-stroke: 2px white;
  color: transparent
}

.tip {
  font-size: 35px;
  top: 120px;
  left: 25px;
  right: 25px;
}
</style>
