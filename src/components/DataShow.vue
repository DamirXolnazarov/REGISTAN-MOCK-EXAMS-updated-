<template>
    <div class="container py-[10px] flex flex-col justify-between items-start px-[15px]">
       <span class="title">{{  title }}</span>
       <div class="textInput flex flex-row pl-[20px] items-center w-[99%] h-[36px] bg-[white]">
        <span class="text-[16px]">{{ value }}</span>
       </div>
    </div>
</template>

<script>
import { setBlockTracking } from 'vue';

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
    props:{
        title: String,
        value: String,
    }
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 76px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
}
.title{
    font-family: monospace;
    font-size: 14px;
}
</style>