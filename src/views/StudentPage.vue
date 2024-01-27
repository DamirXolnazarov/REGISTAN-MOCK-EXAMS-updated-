<script setup>
</script>
<template>
    <div class="student">
        <div class="content">
            <div class="header w-[100%] flex flex-row justify-between items-center h-[80px] px-[25px]">
                <div class="left_side w-[40%] flex flex-row items-center justify-between">
                    <img class="w-[50px]" src="../assets/reloading 1.png" alt="">
                    <div class="theHighestScore w-[77px] h-[77px] flex flex-row justify-center items-end">
                        <span class="text-[32px] font-black">9.0</span>
                    </div>
                </div>
                <div class="right_side flex flex-col justify-center items-center">
                    <div class="coinSystem flex flex-row justify-center items-center w-[35px] h-[35px]">
                        <span class="text-[white] text-[15px]">5</span>
                    </div>
                    <span class="text-center text-[15px] text-[#FFD05B]">coins</span>
                </div>
            </div>
        </div>
        <div class="bottomMenu h-[80px] w-[100%] px-[10px] fixed bottom-[0] left-[0]">
            <div class="flex flex-nowrap px-[15px] justify-between"><img class="first w-[150px]" src="../assets/Vector 4.png" alt=""><img class="absolute orta top-[-8.5px]" src="../assets/Vector 6.png" alt=""><img class="w-[150px]" src="../assets/Vector 4.png" alt=""></div>
           <div class="categories px-[10px] flex flex-row justify-between items-center">
            <div class="news flex flex-col justify-between items-center">
                <img src="../assets/news.png" alt="">
                <span class="mt-[5px] text-[13px] font-medium">News</span>
            </div>
            <div class="level mr-[40px] flex flex-col justify-between items-center">
                <img src="../assets/test.png" alt="">
                <span class="mt-[5px] text-[13px] font-medium">Level Test</span>
            </div>
            <div class="Tips absolute top-[0] flex flex-col justify-between items-center">
                <img class="absolute top-[38px] left-[60px]" src="../assets/lamp.png" alt="">
                <img src="../assets/tips.png" class="w-[45px]" alt="">
                <span class="mt-[5px] text-[15px] font-black">IELTS TIPS</span>
            </div>
            <div class="games ml-[40px] flex flex-col justify-between items-center">
                <img src="../assets/games.png" alt="">
                <span class="mt-[5px] text-[13px] font-medium">Games</span>
            </div>
            <div class="profile flex flex-col justify-between items-center">
                <img src="../assets/profile.png" alt="">
                <span class="mt-[5px] text-[13px] font-medium">Profile</span>
            </div>
           </div>

        </div>

    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            user: {},
            Account: [],
            name: '',
            Full_URL: '',
            Sheet_ID: '1IjdP6V9SJXKPIMqOv-1o0NXjTMLkDQeo4xMD3iyJdMY',
            Sheet_TITLE: 'Reg',
        };
    },

    mounted() {
        this.Full_URL = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID + '/gviz/tq?sheet=' + this.Sheet_TITLE
        fetch(this.Full_URL)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2))
                for (let i of data.table.rows) {
                    if (this.user.login == i.c[6].v && this.user.password == i.c[7].v) {
                        this.Account.push({
                            email: i.c[1].v,
                            name: i.c[2].v,
                            surname: i.c[3].v,
                            branch: i.c[4].v,
                            teacher: i.c[5].v,
                            login: i.c[6].v,
                            password: i.c[7].v,
                        })
                    }

                }
                this.name = this.Account[0].name

            })
        this.user = JSON.parse(window.localStorage.user)
        console.log(this.user);
    },

    methods: {

    },
};
</script>

<style scoped>
.theHighestScore {
    background-image: url('../assets/crown 2.png');
    background-repeat: no-repeat;
    background-position: center top;
    border: 1px solid black;
}

.coinSystem {
    background-image: url('../assets/coin.png');
    background-size: cover;
}
.Tips{
    left: 50%;
    transform: translateX(-50%);
}
.first{
    /* transform: rotate(360deg); */
    transform: rotateY(180deg);
}
.line{
    height: 0.5px;
    left: 50%;
    transform: translateX(-50%);
    background: black;
}
.orta{
    left: 50%;
    transform: translateX(-50%);
}
</style>