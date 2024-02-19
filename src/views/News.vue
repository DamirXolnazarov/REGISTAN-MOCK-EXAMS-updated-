<template>
    <div class="news overflow-x-hidden">
        <RouterLink to="/StudentPage">
            <div class="home cursor-pointer top-[25px] left-[25px] absolute"><img class="w-[40px]" src="../assets/home.png"
                    alt=""></div>
        </RouterLink>
        <div class="content pt-[20px] px-[20px]">
            <div class="title w-[100%] flex flex-col items-center justify-between">
                <span class="text-[40px] font-black">News</span>
            </div>
            <div class="innerContent overflow-x-hidden w-[100%] h-[100vh]">
                <div class="bg fixed overflow-x-hidden top-[100px] w-[200%] h-[100%]"></div>
                <div class="newsPaper border-t-[3px] w-[100%]">
                    <div class="collapse collapse-arrow bg-[white] mt-[25px]" @click="i.isRead = true" v-for="i of news" :key="i.id">
                        <input type="radio" name="my-accordion-2"/>
                        <div class="collapse-title text-xl font-medium flex flex-row">
                            <div v-if="i.isRead == false" class="circleUnread mr-[15px]"></div>
                            {{ i.theme }}
                        </div>
                        <div class="collapse-content">
                            <p>{{ i.body }}</p>
                            <span class="text-[#BEBEBE] my-[10px] flex flex-row justify-end">{{ i.date }}</span>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
        <div class="bottomMenu h-[100px] bg-[white] w-[100%] px-[10px] fixed bottom-[0] left-[0]">
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
                <RouterLink to="/Profile">
                    <div class="profile relative flex flex-col justify-between items-center">
                        <div class="filter absolute w-[189%] top-[-12px] h-[150%] bg-[#FF4508] opacity-[35%]"></div>
                        <img src="../assets/profile.png" alt="">
                        <span class="mt-[5px] text-[13px] font-medium">Profile</span>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            news: [
                {
                    theme: 'Mock Exam',
                    body: 'There will be mock exam in the universam branch of our educational center in 17th July, beginning at 9.00 am and finishing at 1.30 pm. See ya!',
                    date: 'July 2 at 14:02',
                    isRead: false,
                },
                {
                    theme: 'Mock Exam',
                    body: 'There will be mock exam in the universam branch of our educational center in 17th July, beginning at 9.00 am and finishing at 1.30 pm. See ya!',
                    date: 'July 2 at 14:02',
                    isRead: false,
                },
                {
                    theme: 'Mock Exam',
                    body: 'There will be mock exam in the universam branch of our educational center in 17th July, beginning at 9.00 am and finishing at 1.30 pm. See ya!',
                    date: 'July 2 at 14:02',
                    isRead: false,
                },
            ]
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

.categories div {
    background-color: rgb(217, 217, 217, 20%);
}

.bg {
    background-size: 100px;
    transform: rotate(45deg);
    z-index: -1;
    background-image: url('../assets/newsforback.png');
}

.new {
    border: 1px solid black;
}

.circleUnread {
    width: 25px;
    background: #FF4508;
    height: 25px;
    border-radius: 15px;
}

.expand {
    transform: rotate(90deg);
}</style>