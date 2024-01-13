<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import Arrow from '@/components/Arrow.vue';
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
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped></style>