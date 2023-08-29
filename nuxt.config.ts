// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    
    runtimeConfig:{
      baseURL: (process.env.NODE_ENV === 'production' ? 'https://my.prod' : 'http://localhost:3000')
      //public
    }
})
