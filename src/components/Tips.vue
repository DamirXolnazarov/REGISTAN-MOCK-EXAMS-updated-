<template>
    <div class="total relative my-[40px]">
        <div class="back w-[70%] h-[110px] bg-[white] rounded-[10px] flex flex-row pl-[15px] items-center">
            <span class="index text-[40px]">{{ index }}</span>
        </div>
        <div class="front w-[70%] top-[-15px] right-[10px] h-[110px] rounded-[10px] bg-[#fdc100] absolute"
            :style="style">
            <div
                class="title w-[150px] h-[25px] text-[black] bg-[white] text-[18px] flex flex-row mt-[15px] items-center justify-center">
                {{ section }}</div>
                <p class="text py-[10px] px-[10px]">{{ tip }}</p>

        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
    props: {
        backgroundColor: String,
        tip: String,
        index: String,
        section: String,
    },
    computed: {
        style() {
            return {
                backgroundColor: this.backgroundColor,
            };
        },
    }
};
</script>

<style scoped>
.index {
    color: #767070;
}

.back {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: -1;
}

.front {
    border: 2px solid white;
    z-index: 1111;
}
.text{
    color:white;
    font-weight: lighter !important;
    line-height: 20px;
}
</style>