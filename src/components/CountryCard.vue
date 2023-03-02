<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
    country:{
        type:Object
    }
})

const router = useRouter();
const goToCountry = ()=>{
    router.push({
        name:'country',
        params:{
            country:props.country?.name.official
        }
    })
}
</script>

<template>
    <div class="card hover:shadow-lg hover:cursor-pointer dark:bg-dark-blue">
        <div><img :src="country?.flags.svg" alt="" class=""></div>
        <div class="p-5">
            <h2 class="text-xl font-bold">{{ country?.name.common }}</h2>
            <div><span>Population:</span>{{ country?.population }}</div>
            <div><span>Region:</span>{{ country?.region }}</div>
            <div><span>Capital:</span><span v-for="capital in country?.capital">{{ capital }}</span></div>
        </div>
    </div>
</template>

<style scoped>

</style>