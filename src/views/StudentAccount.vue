<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import Arrow from '@/components/Arrow.vue';
</script>

<template>
  <div class="studentAcc">
    <div v-if="showPopup" class="back fixed top-0 left-0 w-[100%] h-[100vh]">
      <div class="animationFrame w-[100%] h-[100%] fixed top-0 left-0">
        <div
          class="animation_content px-[20px] flex flex-col justify-center items-center absolute bg-[white] w-[343px] h-[305px] rounded-[10px]">
          <img class="checked w-[100px]" src="../assets/checked.png" alt="">
          <span class="text-[#00FF1A] text-center text-[30px] font-black">You logged into your account
            successfully!</span>
        </div>
      </div>

    </div>
    <HeaderComp class="asd" textHeader="STUDENT" />
    <div class="login relative">
      <RouterLink to="/">
        <div class="leave p-[15px] left-[5px] top-[5px] absolute">
          <Arrow />
        </div>
      </RouterLink>

      <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span>

        <div class="signin">

          <div class="content">

            <h2>Sign In</h2>

            <div class="form">
              <span class="wrong text-[20px] w-[100%]" v-if="mistake">Your login or password is wrong!</span>

              <div class="inputBox">

                <input @input="mistake = false" type="text" v-model="login" class="text-[#FF4508]" required>
                <i>Username</i>

              </div>

              <div class="inputBox relative">
                <input @input="mistake = false" v-model="password" v-if="show == false" class="text-[#FF4508]"
                  type="password" required>
                <input @input="mistake = false" v-model="password" v-if="show" class="text-[#FF4508]" type="text"
                  required>
                <div @click="show = !show" class="btn cursor-pointer absolute right-[15px]">
                  <img class="w-[20px]" v-if="show" src="../assets/show.png" alt="">
                  <img class="w-[20px]" v-if="show == false" src="../assets/eye.png" alt="">
                </div>
                <i>Password</i>

              </div>

              <div class="links"> <a href="#">Forgot Password</a>
                <RouterLink to="/StudentCrAccount">Signup</RouterLink>

              </div>

              <div class="inputBox">

                <input @click="send" type="submit" value="Login">

              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc0jSndBkJaM91lSBxA4lvrX1N8KieXHlNCKnGjMC2DvhQw7g/viewform?embedded=true"
        width="640" height="617" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe> -->

    </div>
  </div>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      password: '',
      login: '',
      results: [],
      mistake: false,
      showPopup: false,
      show: false,
      Full_URL: '',
      Sheet_ID: '1IjdP6V9SJXKPIMqOv-1o0NXjTMLkDQeo4xMD3iyJdMY',
      Sheet_TITLE: 'Reg',
    };
  },
  components: {
  },
  mounted() {
    this.Full_URL = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID + '/gviz/tq?sheet=' + this.Sheet_TITLE
    fetch(this.Full_URL)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
        for (let i of data.table.rows) {
          this.results.push({
            login: i.c[6].v,
            password: i.c[7].v,
          })

        }
        console.log(this.results);

      })
  },
  methods: {
    send() {
      for (let i of this.results) {
        if (this.login == i.login && this.password == i.password) {
          setTimeout(() => {
            
            this.showPopup = true
          }, 700);
          setTimeout(() => {
            this.$router.push('/StudentPage')
          }, 5000);
          window.localStorage.user = JSON.stringify({
            login: this.login,
            password: this.password,
          })
        }
      }
    }

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

input {
  color: #FF4508 !important;
}
@keyframes an{
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}
.checked{
    animation: an .3s;
    animation-delay: 2s;
}
.back{
    background-image: url('../assets/logo.png');
    background-size: 34%;
    z-index: 99999999 !important;
}
.animationFrame{
   backdrop-filter: blur(7px);
   animation-delay: 1.8s;
   animation: an .3s;

}
.animation_content{
   top: 50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
}
/* .success{
  top: 50%;
} */
.backg {
  z-index: 99999999999999 !important;
  backdrop-filter: blur(8px);
}

.asd {
  font-size: 36px;
  border: none
}

.success {
  z-index: 99999999 !important;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.wrong {
  background: none;
  appearance: none;
  transition: .3s;
  width: 100%;
}

.btn {
  top: 50%;
  transform: translateY(-50%);
}

.hidePassword {
  right: 15px;
  background-size: cover;
  top: 50%;
  transform: translateY(-50%);
}

.leave {
  z-index: 9999 !important;
}

section {
  position: absolute;
  transition: .3s;
  background: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(#000000, #FF4508, #000000);
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

section span {
  position: relative;
  display: block;
  width: calc(6.25vw - 2px);
  height: calc(6.25vw - 2px);
  background: #000000;
  z-index: 2;
  transition: 1.5s;
}

section span:hover {
  background: #FF4508;
  transition: 0s;
}

section .signin {
  position: absolute;
  width: 90%;
  background: #FF4508;
  transition: .3s;
  z-index: 1000;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 9);
}

section .signin .content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s;
  flex-direction: column;
  gap: 40px;
}

section .signin .content h2 {
  font-size: 2em;
  color: #fff;
  text-transform: uppercase;
}

section .signin .content .form {
  width: 100%;
  display: flex;
  transition: .3s;
  flex-direction: column;
  gap: 25px;
}

section .signin .content .form .inputBox {
  position: relative;
  width: 100%;
}

section .signin .content .form .inputBox input {
  position: relative;
  width: 100%;
  background: #ffffff;
  border: none;
  color: #FF4508;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1em;
}

.p-password-input {
  font-size: 15px;
}

.p-inputtext .p-component .p-password-input:focus-visible {
  outline: none;
}

.p-icon {
  width: 25px;
  height: 25px;
}

section .signin .content .form .inputBox .inp[data-v-ae13ceef] {
  width: 100%;
  height: 55px;
  padding: 0px !important;
}

section .signin .content .form .inputBox .inp {
  position: relative;
  width: 100%;
  background: #ffffff;
  border: none;
  color: #FF4508;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1em;
}

section .signin .content .form .inputBox i {
  position: absolute;
  left: 0;
  padding: 15px 10px;
  font-style: normal;
  color: #FF4508;
  transition: 0.5s;
  pointer-events: none;
}

.signin .content .form .inputBox input:focus~i,
.signin .content .form .inputBox input:valid~i {
  transform: translateY(-7.5px);
  font-size: 0.8em;
  color: #fff;
}

.signin .content .form .inputBox .inp:focus~i,
.signin .content .form .inputBox .inp:valid~i {
  transform: translateY(-7.5px);
  font-size: 0.8em;
  color: #fff;
}

.signin .content .form .links {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.signin .content .form .links a {
  color: #fff;
  text-decoration: none;
}

.signin .content .form .links a:nth-child(2) {
  color: #0f0;
  font-weight: 600;
}

.signin .content .form .inputBox input[type="submit"] {
  padding: 10px;
  background: #000000;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 1.35em;
  letter-spacing: 0.05em;
  cursor: pointer;
}

input[type="submit"]:active {
  opacity: 0.6;
}

@media (max-width: 900px) {
  section span {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}

input[type='submit'] {
  color: white !important;
}

@media (max-width: 600px) {
  section span {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
}</style>