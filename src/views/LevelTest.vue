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
        <div class="testResultShow py-[25px] px-[25px] flex flex-col items-center" v-if="IsOver == false">

            <svg width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg"
                style="transform:rotate(-90deg)">
                <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" stroke-width="16px"
                    stroke-dasharray="565px" stroke-dashoffset="0"></circle>
                <circle r="90" cx="100" cy="100" stroke="#00ffff" stroke-width="16px" stroke-linecap="round"
                    :stroke-dashoffset="shadedArea" fill="transparent" stroke-dasharray="565.48px"></circle>
                <text x="72px" y="118px" fill="#00ffff" font-size="52px" font-weight="bold"
                    style="transform:rotate(90deg) translate(0px, -196px)">{{ this.score.cefr }}</text>
            </svg>

            <span>Correct answers✅: </span>
            <span class="text-[20px] text-[lime]">{{ score.points }}</span>
            <span>Cefr Level:</span>
            <span class="text-[30px] text-[#FF4C00]">{{ score.level }}</span>
        </div>
        <div class="table">

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
            shadedArea: 0,
            Account: [],
            score: {},
            Sheet_ID: '1nCN5mDFikmqzM8CCY5KR2VAOkb2lWlo2uQ9c22X9giQ',
            Sheet_TITLE: 'English level test',
            Full_URL: '',
            Descriptions: [
                {
                    level: 'A1 (Beginner)',
                    description: 'At this level, learners can understand and use basic expressions and phrases related to personal information, daily routines, and simple interactions. They can introduce themselves and ask and answer simple questions about familiar topics.',
                    testRange: '0-21',
                },
                {
                    level: 'A2 (Elementary)',
                    description: 'At the A2 level, learners can understand and use commonly used expressions and phrases related to personal and family information, shopping, and immediate surroundings. They can communicate in simple and routine tasks requiring a direct exchange of information.',
                    testRange: '21-25',
                },
                {
                    level: 'B1 (Intermediate)',
                    description: 'At the B1 level, learners can understand the main points of clear and standard speech on familiar topics. They can handle most situations that may arise while traveling in an area where the language is spoken. They can produce simple and coherent texts on familiar topics and describe experiences, events, and dreams.',
                    testRange: '26-30',
                },
                {
                    level: 'B2 (Upper Intermediate)',
                    description: 'At the B2 level, learners can understand the main ideas of complex texts on both concrete and abstract topics. They can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers possible. They can produce clear and detailed texts on a wide range of subjects and explain viewpoints on various topics.',
                    testRange: '31-35',
                },
                {
                    level: 'C1 (Advanced)',
                    description: 'At the C1 level, learners can understand a wide range of demanding, longer texts, and recognize implicit meaning.They can express themselves fluently and spontaneously without much obvious searching for expressions. They can use language flexibly and effectively for social, academic, and professional purposes. ',
                    testRange: '36-40',
                },
            ]
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
            this.shadedArea = (565 - (565 * this.score.points) / 40) + 'px'
            console.log(this.shadedArea);
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

.testResultShow {
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 21px;
}

.progress::after {
    background: #FF4C00;
}
</style>