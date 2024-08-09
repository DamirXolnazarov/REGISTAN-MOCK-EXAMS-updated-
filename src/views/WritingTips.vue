<script setup>
import Tips from '@/components/Tips.vue';
import 'animate.css';
</script>
<template>
  <div class="writingTips relative" id="tap">
    <span class="text-[36px] my-[25px] font-black text-center flex flex-row justify-center w-[100%]">Writing <span
        class="text-[#FAFF00]">TIPS</span></span>
    <RouterLink to="/IELTS_tips">
      <div class="home cursor-pointer top-[35px] left-[25px] absolute"><img class="w-[40px] rotate-[180deg]"
          src="../assets/arrow.png" alt=""></div>
    </RouterLink>
    <div class="main px-[25px]">
      <div class="tips px-[15px] rounded-[15px]">

        <!-- asdasdasd -->
        <Tips @click="Extend(i)" v-for="i of this.WritingTips" :key="i.id" :index="i.index" :section="i.section"
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
      WritingTips: [
        {
          tip: "Improve your learning by doing our ...",
          tip1: "Improve your learning by doing our PRACTICE materials",
          color: '#fcd29f',
          unlocked: true,
          section: 'WRITING',
          index: '01',
        },
        {
          tip: "Mind the time! 20min + 40min save ...",
          tip1: "Mind the time! 20min + 40min save 5min for proof-reading",
          color: "#eeb868",
          section: 'WRITING',
          index: '02',
          unlocked: true,
        },
        {
          tip: "Start with planning - brainstorm ideas ...",
          tip1: "Start with planning - brainstorm ideas and organise the best ones",
          color: "#49dcb1",
          unlocked: true,
          index: '03',
          section: 'WRITING',
        },
        {
          tip: "Write down a list of 'nice words' around ...",
          tip1: "Write down a list of 'nice words' around the topic and use them",
          color: "#49beaa",
          unlocked: false,
          index: '04',
          section: 'WRITING',
        },
        {
          tip1: "Do not write too much in the first task. Write not less than 300 words in the task 2",
          tip: "Do not write too much in the first ...",
          color: "#456990",
          section: 'WRITING',
          unlocked: false,
          index: '05',
        },
        {
          tip: "Start writing directly on the answer ...",
          tip1: "Start writing directly on the answer sheet.",
          color: "#ef767a",
          index: '06',
          section: 'WRITING',
          unlocked: false,
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







