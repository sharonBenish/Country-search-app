<template>
    <div class="p-5">
        <header class="md:flex md:justify-between mb-5">
            <div class="flex bg-white h-10 items-center px-3 shadow-lg rounded-md dark:bg-dark-blue">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
                <input type="text" placeholder="search country" class="px-2 outline-0 dark:bg-dark-blue" v-model="query" @input="searchCountry">
            </div>
            <div class="bg-white dark:bg-dark-blue h-10 px-3 flex items-center mt-4 md:mt-0 w-max relative rounded shadow-md filter-container">
                <span class="flex" @click="toggleFilterDropdown">{{ region }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-3">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
                <div v-if="filterOpen" class="absolute dropdown left-0 bg-white dark:bg-dark-blue right-0 shadow-sm rounded">
                    <ul class="continent-list" @click="selectRegion">
                        <li class="px-3 py-1">Filter By Region</li>
                        <li class="px-3 py-1">Africa</li>
                        <li class="px-3 py-1">Americas</li>
                        <li class="px-3 py-1">Asia</li>
                        <li class="px-3 py-1">Europe</li>
                        <li class="px-3 py-1">Oceania</li>
                        <li class="px-3 py-1">Antarctic</li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-5">
            <div class="max-w-max max-h-max" v-for="country,index in store.countries" :key="index" @click="goSom(country)">
                <CountryCard :country="country"></CountryCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';
import CountryCard from '../components/CountryCard.vue';
import {useStore} from '../store';
import debounce from 'lodash.debounce';
import { useRouter } from 'vue-router';

const store = useStore();
const query = ref('');
const region = ref('Filter By Region');
const router = useRouter();

onMounted(()=>{
     store.fetchAllCountries();
})
const filterOpen = ref(false);
const toggleFilterDropdown = ()=>{
    filterOpen.value = !filterOpen.value
}
const searchCountry = debounce(()=>{
    if (query.value.trim()==""){
        store.fetchAllCountries();
        region.value = "Filter By Region"
    }else{
        store.fetchCountries(query.value)
    }
}, 800)

const selectRegion = (e:Event)=>{
    const key = e.target as HTMLElement;
    region.value = key.innerText;
    toggleFilterDropdown();
    if (region.value == 'Filter By Region'){
        store.fetchAllCountries()
    }else{
        store.fetchByRegion(region.value)
    }
}

const goSom = (info:{name:{common:string}})=>{
    router.push({name:'CountryInfo', params:{country:info.name.common}})
}

</script>

<style scoped>
.dropdown{
    top:0;
}
.continent-list> li:hover{
    cursor: pointer;
    background: gray;
}
.filter-container{
    min-width:150px;
}
</style>