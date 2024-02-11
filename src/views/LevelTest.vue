<template>
    <div class="levelTest pt-[20px] px-[20px]">
        <span class="text-[26px] font-black text-center flex flex-row justify-center w-[100%]">Level Test</span>
        <div class="progressBar bg-[#fff] sticky top-[0] h-[70px] flex flex-row items-center justify-center">
            <progress class="progress progress-error w-[100%]" :value="value" max="100"></progress>
        </div>
        <div class="test w-[100%] flex flex-row justify-center">
            <iframe class="rounded-[15px]" v-if="IsOver"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeM_Mjm7M643OvXmf7u2TLOAIQ1H9C6P2pE7AYcOpsrrzwh3Q/viewform?embedded=true"
                width="100%" height="900px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            value: 0,
            IsOver: true,
        };
    },

    mounted() {
        let a = setInterval(() => {
            this.value += 0.01
            if(Math.round(this.value) == 100){
                clearInterval(a)
                this.IsOver = false
            }
        }, 30);

    },

    methods: {

    },
};
</script>

<style scoped>
.progress {
    transition: .3s;
}

.progress::before {
    background: #FF4C00;
}

.progress::after {
    background: #FF4C00;
}</style>