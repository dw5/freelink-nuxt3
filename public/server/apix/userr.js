
export default defineEventHandler(async (event) => {
  const { baseUrl } = useRuntimeConfig()

    //query
    const { name } = getQuery(event)
    //const name = getRouterParam(event, 'name')

  // handle post data
  // const { age } = await readBody(event)

  let development = process.env.NODE_ENV !== 'production'
  const baseURL = development ? 'http://localhost:3000' : 'https://my.prod' // bc fetch itself data wont work?
  
  //console.log("TESTTT"+baseURL)
  
  const uri = "http://localhost:3000/api/user/" + id + ".json";

const { userdata } = await $fetch(uri)

    return {
      userdata
    }

})