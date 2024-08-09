<script setup>
import Tips from '@/components/Tips.vue';
import 'animate.css';
</script>
<template>
  <div class="listeningTips relative" id="tap">
    <img class="headphone w-[50px] top-[9px] absolute right-[65px]" src="../assets/headphone.png" alt="">
    <span class="text-[36px] my-[25px] font-black text-center flex flex-row justify-center w-[100%]">Listening <span
        class="text-[#FAFF00]">TIPS</span></span>
    <RouterLink to="/IELTS_tips">
      <div class="home cursor-pointer top-[35px] left-[25px] absolute"><img class="w-[40px] rotate-[180deg]"
          src="../assets/arrow.png" alt=""></div>
    </RouterLink>
    <div class="main px-[25px]">
      <div class="tips px-[15px] rounded-[15px]">

        <!-- asdasdasd -->
        <Tips @click="Extend(i)" v-for="i of this.ListeningTips" :key="i.id" :index="i.index" :section="i.section"
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

    <div @click="disappear()" v-if="mark" class="inline leave fixed home cursor-pointer"><img class="w-[140px] rotate-[180deg]"
        src="../assets/arrow1.png" alt=""></div>
    <div class="extendedTip fixed flex flex-col justify-center items-center px-[25px] w-[100%] h-[100%] top-0 left-0 animate__repeat-none"
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
      ListeningTips: [
        {
          tip: "Improve your learning by doing our ...",
          tip1: "Improve your learning by doing our PRACTICE materials",
          color: 'orange',
          index: '01',
          unlocked: true,
          section: 'LISTENING',
        },
        {
          tip: "In your listening test, use the example at ...",
          tip1: "In your listening test, use the example at the beginning of the first section to familiarise yourself with the voice, situation, and speakers.",
          color: "#FDC100",
          unlocked: true,
          index: '02',
          section: 'LISTENING',
        },
        {
          tip: "Keep listening until the recording stops, looking ...",
          tip1: "Keep listening until the recording stops, looking ONLY at the questions that relate to the part being played. If you look at the questions first and then listen to the record, you would be ready to extract information from the recording.",
          color: "#FED811",
          unlocked: true,
          index: '03',
          section: 'LISTENING',
        },
        {
          tip: "There are often pauses in the recording between ...",
          tip1: "There are often pauses in the recording between different sections. Use these to prepare for the next set of questions. If you do nothing during this time, you would find it hard to answer the questions if the speaking is fast.",
          color: "#B4FFFF",
          unlocked: false,
          index: '04',
          section: 'LISTENING',
        },
        {
          tip: "Answer questions in the order they appear on ...",
          tip1: "Answer questions in the order they appear on the question paper. Remember that they normally follow the order of the information in the recording. Even if there are some exceptions, following this strategy would help you greatly.",
          color: "#02CECB",
          unlocked: false,
          index: '05',
          section: 'LISTENING',
        },
        {
          tip: "At the end of the recording, you have some time ...",
          tip1: "At the end of the recording, you have some time to transfer your answers to the Answer Sheet. Check your grammar and spelling as you do so. Remember, a misspelt or grammatically incorrect answer would not carry any marks for you. ",
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
    for (let i of a) {
      i.style.border = '6px solid' + this.ListeningTips[i.innerHTML - 1].color
      i.style.color = this.ListeningTips[i.innerHTML - 1].color
    }
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
    disappear(){
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
@keyframes tip {
  0% {
    scale: 0;
  }

  100% {
    scale: 1;
  }
}
.leave{
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
.index{
  font-size: 390px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: -1;
  -webkit-text-stroke: 2px white;
  color: transparent
}
.tip{
  font-size: 35px;
  top: 120px;
  left: 25px;
  right: 25px;
}

</style>
<!-- animate__bounceIn -->