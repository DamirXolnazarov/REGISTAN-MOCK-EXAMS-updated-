<template>
    <div class="levelTest pt-[20px] px-[20px]">
        <span class="text-[26px] font-black text-center flex flex-row justify-center w-[100%]">Level Test</span>
        <div v-if="IsOver" class="progressBar bg-[#fff] sticky top-[0] h-[70px] flex flex-row items-center justify-center">
            <progress class="progress progress-error w-[100%]" :value="value" max="100"></progress>
        </div>
        <div v-if="IsOver" class="test w-[100%] flex flex-col items-center">
            <iframe class="rounded-[15px]"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeM_Mjm7M643OvXmf7u2TLOAIQ1H9C6P2pE7AYcOpsrrzwh3Q/viewform?embedded=true"
                width="100%" height="900px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
            <button @click="TestFinished" class="rounded-[15px] my-[15px] w-[70%] h-[50px] text-[white] bg-[#FF4C00]">I have
                finished the test!</button>
        </div>
        <div class="testResultShow" v-if="IsOver == false">

            <svg width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg"
                style="transform:rotate(-90deg)">
                <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" stroke-width="16px"
                    stroke-dasharray="565.48px" stroke-dashoffset="0"></circle>
                <circle r="90" cx="100" cy="100" stroke="#00ffff" stroke-width="16px" stroke-linecap="round"
                    stroke-dashoffset="164px" fill="transparent" stroke-dasharray="565.48px"></circle>
                <text x="72px" y="118px" fill="#00ffff" font-size="52px" font-weight="bold"
                    style="transform:rotate(90deg) translate(0px, -196px)">{{ this.score.cefr }}</text>
            </svg>

            <span>{{ score.points }}</span>
            <span>{{ score.level }}</span>
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
            Account: [],
            score: {},
            Sheet_ID: '1nCN5mDFikmqzM8CCY5KR2VAOkb2lWlo2uQ9c22X9giQ',
            Sheet_TITLE: 'English level test',
            Full_URL: '',
        };
    },

    mounted() {
        this.Account = JSON.parse(window.localStorage.account)
        let a = setInterval(() => {
            this.value += 0.01
            if (Math.round(this.value) == 100) {
                clearInterval(a)
                this.IsOver = false
            }
        }, 30);
        this.Full_URL = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID + '/gviz/tq?sheet=' + this.Sheet_TITLE
        fetch(this.Full_URL)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2))
                for (let i of data.table.rows) {
                    if (i.c[1].v == this.Account.email) {
                        if (i.c[2].v <= 21) {
                            this.score = {
                                points: i.c[2].v,
                                level: 'Beginner',
                                cefr: 'A1',
                            }
                        } else if (i.c[2].v <= 25 && i.c[2].v > 21) {
                            this.score = {
                                points: i.c[2].v,
                                level: 'Elementary',
                                cefr: 'A2',
                            }
                        } else if (i.c[2].v <= 30 && i.c[2].v > 25) {
                            this.score = {
                                points: i.c[2].v,
                                level: 'Intermediate',
                                cefr: 'B1',
                            }
                        } else if (i.c[2].v <= 35 && i.c[2].v > 30) {
                            this.score = {
                                points: i.c[2].v,
                                level: 'Upper-Intermediate',
                                cefr: 'B2',
                            }
                        } else if (i.c[2].v <= 40 && i.c[2].v > 35) {
                            this.score = {
                                points: i.c[2].v,
                                level: 'Advanced',
                                cefr: 'C1',
                            }
                        }
                    }
                }
            })

    },

    methods: {
        TestFinished() {
            this.IsOver = false
        }
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