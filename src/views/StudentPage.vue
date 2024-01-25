<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import Arrow from '@/components/Arrow.vue';
</script>
<template>
    <div class="student">
        <HeaderComp class="asd" :textHeader="user.login" />
        <RouterLink to="/">
            <div class="leave p-[15px] left-[5px] top-[5px] absolute">
                <Arrow />
            </div>
        </RouterLink>
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
        };
    },

    mounted() {
        this.Full_URL = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID + '/gviz/tq?sheet=' + this.Sheet_TITLE
        fetch(this.Full_URL)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2))
                for (let i of data.table.rows) {
                    this.results.push({
                        login: i.c[6].v,
                        password: i.c[7].v,
                    })

                }
                console.log(this.results);

            })
        this.user = JSON.parse(window.localStorage.user)
        console.log(this.user);
    },

    methods: {

    },
};
</script>

<style scoped></style>