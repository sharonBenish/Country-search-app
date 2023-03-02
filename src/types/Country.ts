
interface Country{
    commonName: string,
    officialName: string,
    flag:string,
    capital:string,
    region:string,
    subregion:string,
    tld:string,
    currencies:{
        [key:string]:Currencies
    },
    population:string,
    languages:{
        [key:string]:string
    },
    borders:string[]
}

interface Currencies{
    name:string,
    symbol:string
}

export default Country