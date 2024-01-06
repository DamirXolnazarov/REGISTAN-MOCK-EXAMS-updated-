<script setup>
</script>

<template>
  <div class="home">
    <div class="landingPage absolute left-[0px] top-[0px] w-[100%] h-[116px] bg-[red]">
      <div class="top w-[100%] flex flex-row justify-center items-center h-[116px] bg-[#FF4508]">
        <img class="w-[110px]" src="../assets/logo.png" alt="">
      </div>
      <div class="content pt-[30px] w-[100%] flex flex-row justify-center items-start">
        <div class="isSigned px-[15px] pt-[30px] flex flex-col justify-between items-center">
            <span class="text-[32px] font-black">Login or sign up as</span>
              <RouterLink to="/createStudentAcc"><button class="button-1">STUDENT</button></RouterLink>
              <RouterLink to="/createTeacherAcc"><button class="button-2">TEACHER</button></RouterLink>
              <RouterLink to="/createManagerAcc"><button class="button-3">MANAGER</button></RouterLink>
        </div>
      </div>
    </div>
    <div class="animationWin" v-if="entered">
      <div class="logo absolute"><img src="../assets/logo.png" alt=""></div>
      <div class="letter-container">
        <span v-for="(letter, index) in words" :key="index" class="letter"
          :style="{ animationDelay: `${index * 300}ms` }">
          {{ letter === ' ' ? '\u00A0' : letter }}
        </span>
      </div>
      <div class="loading" v-if="loading">
        <span class="loader"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',

  data() {
    return {
      words: ['R', 'E', 'G', 'I', 'S', 'T', 'A', 'N', ' ', 'M', 'O', 'C', 'K', ' ', 'E', 'X', 'A', 'M', 'S'],
      loading: false,
      entered: false,
      date: '',
    };
  },

  mounted() {
    this.animateLetters();
    setTimeout(() => {
      this.loading = true
    }, 4000);
    setTimeout(() => {
      this.entered = false
    }, 7000);
  },

  methods: {
    animateLetters() {
      const letterElements = document.querySelectorAll('.letter');

      letterElements.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('appear');
        }, index * 200);
      });
    },
  },
};
</script>
<style scoped>
@keyframes appearing {
  0% {
    opacity: 0%
  }

  100% {
    opacity: 100%
  }

}

.home {
  width: 100%;
  height: 100%;
  /* background-color: #FF4508; */
}

.block {
  width: 85%;
  height: 92px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
}

.animationWin {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #FF4508;
  animation: appearing .3s ease-in-out;
}

.logo img {
  width: 220px;
}

.logo {
  position: absolute;
  top: 35%;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
}

.isSigned {
  width: 90%;
  height: 300px;
  padding: 15px;
  padding-bottom: 25px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;

}

.letter-container {
  display: flex;
  top: 50%;
  left: 50%;
  justify-content: center;
  font-size: 32px;
  width: 290px;
  height: 100px;
  position: absolute;
  flex-wrap: wrap;
  color: white;
  transform: translateX(-50%) translateY(-50%);
}

.letter {
  opacity: 0;
  transition: opacity 1s ease-out;
}


.appear {
  opacity: 1;
}

.loading {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.button-1 {
  color: #fff;
  padding: 15px 25px;
  background-color: #FF4508;
  background-image: radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 66% at 26% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);
  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25), inset 0px 3px 9px rgba(255, 255, 255, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px -8px 36px rgba(0, 0, 0, 0.3), inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  font-weight: bold;
  font-size: 15px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
}
.button-2 {
  color: #fff;
  padding: 15px 25px;
  background-color: #38D2D2;
  background-image: radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 66% at 26% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);
  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25), inset 0px 3px 9px rgba(255, 255, 255, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px -8px 36px rgba(0, 0, 0, 0.3), inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  font-weight: bold;
  font-size: 18px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
}
.button-3 {
  color: #fff;
  padding: 15px 25px;
  background-color: #001F3F;
  background-image: radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 66% at 26% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);
  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25), inset 0px 3px 9px rgba(255, 255, 255, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px -8px 36px rgba(0, 0, 0, 0.3), inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  font-weight: bold;
  font-size: 20px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
}
.button-24:hover,
.button-24:active {
  background-color: initial;
  background-position: 0 0;
  color: #FF4742;
}

.button-24:active {
  opacity: .5;
}
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>