<script setup>
import DataShow from '../components/DataShow.vue';
</script>
<template>
    <div class="personal">
        <div class="content pt-[20px] px-[25px]">
            <div class="title w-[100%] flex flex-col items-center justify-between">
                <span class="text-[30px] font-black">Personal Details</span>
            </div>
            <div class="history text-[#CBCBCB] mt-[15px]">
                <RouterLink to="/Profile"><span>Profile</span></RouterLink><span> / <u>Personal Details</u></span>
            </div>
            <div class="datas">
                <DataShow class="mt-[20px]" @click="copyURL(account.name)" title="Name"
                    :value="account.name" />
                <DataShow class="mt-[20px]" @click="copyURL(account.surname)" title="Surname"
                    :value="account.surname" />
                <DataShow class="mt-[20px]" @click="copyURL(account.email)" title="Email"
                    :value="account.email" />
                <DataShow class="mt-[20px]" @click="copyURL(account.login)" title="Login"
                    :value="account.login" />
                <DataShow class="mt-[20px]" @click="copyURL(account.password)" title="Password"
                    :value="account.password" />
                <DataShow class="mt-[20px]" @click="copyURL(account.teacher)" title="Teacher"
                    :value="account.teacher" />
                <DataShow class="mt-[20px]" @click="copyURL(account.branch)" title="Branch"
                    :value="account.branch" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            account: []
        };
    },

    mounted() {
        this.account = JSON.parse(window.localStorage.account)
        console.log(this.account);
    },

    methods: {
        async copyURL(mytext) {
            try {
                await navigator.clipboard.writeText(mytext);
                alert('Copied');
            } catch ($e) {
                alert('Cannot copy');
            }
        }
    },
};
</script>

<style scoped></style>