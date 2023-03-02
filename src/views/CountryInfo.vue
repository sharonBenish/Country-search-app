<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '../store';

const route = useRoute();
const router = useRouter();
const store = useStore();

onMounted(()=>{
    store.fetchCountryInfo(route.params.country as string)
})
const goBack = ()=>{
    router.go(-1);
}
onBeforeUnmount(()=>{
    store.resetCountryInfo()
})

const {countryInfo} = storeToRefs(store)
</script>
<template>
    <div class="p-5 h-full min-h-[calc(100vh-64px)]">
        <button class="shadow-lg px-5 py-3 rounded-md flex justify-between items-center" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back</span>
        </button>
        <div class="my-5 lg:flex">
            <!-- {{ countryInfo }} -->
            <div class="flag">
                <img :src="countryInfo.flag" alt="" class="lg:max-w-xl">
            </div> 
            <div class="info lg:mx-8 lg:text-lg">
                <h2 class="text-3xl font-bold my-4 lg:mt-0 lg:text-4xl">{{ countryInfo.commonName }}</h2>
                <p><span>Official Name: </span>{{ countryInfo.officialName }}</p>
                <p><span>Population:</span>{{ countryInfo.population }}</p>
                <p><span>Capital: </span>{{ countryInfo.capital }}</p>
                <p><span>Region: </span>{{ countryInfo.region }}</p>
                <p><span>Sub Region: </span>{{ countryInfo.subregion }}</p>
                <p><span>Top Level Domain: </span>{{ countryInfo.tld }}</p>
                <p>
                    <span>Currencies: </span>
                    <span v-for="curr in countryInfo.currencies">{{ curr.name }}({{curr.symbol}})</span>
                </p>
                <p>
                    <span>Languages: </span>
                    <span v-for="lang, keys, index in countryInfo.languages">
                        {{ lang }}
                        <span v-if="index !== Object.keys(countryInfo.languages).length - 1">, </span>
                    </span>
                </p>
                <div class="lg:flex items-center">
                    <h3 class="text-2xl font-bold my-4 lg:mr-4">Border Countries:</h3>
                    <div class="flex flex-wrap">
                        <p v-for="border, index in countryInfo.borders" :key="index" class="shadow-md rounded-sm p-3 w-min mr-5 lg:text-base">{{ border }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.info >p{
    color:hsl(0, 0%, 52%);
    font-weight: 300;
}
.info > p>span:first-of-type{
    font-weight: 700;
    margin-right: 8px;
}
</style>