import axios from 'axios'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: ()=>({
        countries:[],
        countryInfo:{} as object
    }),
    actions:{
        fetchCountries(data:string){
           axios.get(`https://restcountries.com/v3.1/name/${data}`)
                .then(res=> this.countries=res.data)
        },
        fetchAllCountries(){
            axios.get("https://restcountries.com/v3.1/all")
                .then(res=>this.countries = res.data)
        },
        fetchByRegion(data:string){
            axios.get(`https://restcountries.com/v3.1/region/${data}`)
                .then(res=>this.countries = res.data)
        },
        fetchCountryInfo(data:string){
            axios.get(`https://restcountries.com/v3.1/name/${data}`)
                .then((res)=>{
                    const info = res.data[0];
                    this.countryInfo = {
                        commonName: info.name.common,
                        officialName: info.name.official,
                        flag:info.flags.svg,
                        capital:info.capital[0],
                        region:info.region,
                        subregion:info.subregion,
                        tld:info.tld[0],
                        currencies:info.currencies,
                        population:info.population,
                        languages:info.languages,
                        borders:info.borders
                    }
                })
        },
        resetCountryInfo(){
            this.countryInfo={}
        }
    }
})