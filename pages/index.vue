<template>

  <Head>
    <Title>Home - Freelink</Title>
    <Meta name="description" content="Freelink" />
  </Head>

  <body>
    <div class="container">
      <h1>Freelink NUXT</h1>
      <p>Hello. no sign ups yet!</p>
      <p>FEATURES: 
        Multiple user profiles
        URL Shortening
        TODO: Login, sign up, camera/image upload with resize-crop, built in api to sql server...
      </p>
    </div>
  </body>

</template>

<style lang="css" scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.container {
  max-width: 500px;
  margin: 0 20px;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
}
</style>