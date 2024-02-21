<template>
    <div class="profilePage">
        <RouterLink to="/StudentPage"><div class="home cursor-pointer top-[25px] left-[25px] absolute"><img class="w-[40px]" src="../assets/home.png" alt=""></div></RouterLink>
        <div class="content pt-[20px] px-[20px]">
            <div class="title w-[100%] flex flex-col items-center justify-between">
                <span class="text-[40px] font-black">Damirbek</span>
                <span class="text-[24px] font-semibold">Kholnazarov</span>
            </div>
            <div class="categories mt-[50px] flex flex-col items-center justify-between w-[100%] h-[220px] px-[15px]">
                <RouterLink class="w-[100%] h-[65px]" to="/PersonalDetails"><div class="px-[20px] text-[#939393] w-[100%] h-[65px] flex flex-row justify-between items-center">
                    <span>Personal details</span><img src="../assets/arrow.png" alt="">
                </div></RouterLink>
                <div class="Passwords px-[20px] text-[#939393] w-[100%] h-[65px] flex flex-row justify-between items-center">
                    <span>Passwords & Security</span><img src="../assets/arrow.png" alt="">
                </div>
                <div class="ResultHistory px-[20px] text-[#939393] w-[100%] h-[65px] flex flex-row justify-between items-center">
                    <span>Score history</span><img src="../assets/arrow.png" alt="">
                </div>
            </div>
        </div>
        
        <div class="bottomMenu h-[100px] w-[100%] px-[10px] fixed bottom-[0] left-[0]">
            <div class="categories px-[10px] pt-[40px] flex flex-row justify-between items-center">
                <div class="news flex flex-col justify-between items-center">
                    <img src="../assets/news.png" alt="">
                    <span class="mt-[5px] text-[13px] font-medium">News</span>
                </div>
                <div class="level mr-[40px] flex flex-col justify-between items-center">
                    <img src="../assets/test.png" alt="">
                    <span class="mt-[5px] text-[13px] font-medium">Level Test</span>
                </div>
                <div class="Tips absolute top-[10px] flex flex-col justify-between items-center">
                    <img class="absolute top-[38px] left-[60px]" src="../assets/lamp.png" alt="">
                    <img src="../assets/tips.png" class="w-[45px]" alt="">
                    <span class="mt-[5px] text-[15px] font-black">IELTS TIPS</span>
                </div>
                <div class="games ml-[40px] flex flex-col justify-between items-center">
                    <img src="../assets/games.png" alt="">
                    <span class="mt-[5px] text-[13px] font-medium">Games</span>
                </div>
                <RouterLink to="/Profile"><div class="profile relative flex flex-col justify-between items-center">
                    <div class="filter absolute w-[189%] top-[-12px] h-[150%] bg-[#FF4508] opacity-[35%]"></div>
                    <img src="../assets/profile.png" alt="">
                    <span class="mt-[5px] text-[13px] font-medium">Profile</span>
                </div></RouterLink>
            </div>

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

<style scoped>
.bottomMenu {
    background-image: url('../assets/me.png');
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
}
.Tips {
    left: 50%;
    transform: translateX(-50%);
}
.categories div{
    background-color: rgb(217, 217, 217, 20%);
}

</style>