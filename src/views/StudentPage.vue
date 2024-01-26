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
        <div class="bottomMenu">
            

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
</style>