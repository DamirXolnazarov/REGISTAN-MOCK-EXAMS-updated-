<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import Arrow from '@/components/Arrow.vue';
import router from '@/router';
</script>
<template>
    <div class="studentAcc">
        <HeaderComp class="asd" textHeader="STUDENT CREATE ACCOUNT" />
        <div class="login relative">
            <RouterLink to="/">
                <div class="leave p-[15px] left-[5px] top-[5px] absolute">
                    <Arrow />
                </div>
            </RouterLink>
        </div>
        <div class="content pt-[50px] pb-[100px]">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfhIPenuIShZdp3dqeuoxyGfFIyvX37E25N7NNQWpHt5UOuOQ/viewform?embedded=true"
                width="100%" height="1377" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>

                <div class="btnToLogin w-[100%] flex flex-row justify-center items-center pt-[50px]">
                    <RouterLink to="/createStudentAcc"><button class="w-[250px] h-[50px] bg-[#FF4508] rounded-[8px] text-[white]">I filled the form!</button></RouterLink>

                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            puzzle: '',
            number: 0,
            Full_URL: '',
            Sheet_ID: '1IjdP6V9SJXKPIMqOv-1o0NXjTMLkDQeo4xMD3iyJdMY',
            Sheet_TITLE: 'Reg',
        };
    },

    mounted() {

    },

    methods: {
    }
};
</script>

<style scoped></style>