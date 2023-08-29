<template>

    <Head>
      <Title>Error - Freelink</Title>
      <Meta name="description" content="freelink" />
    </Head>
  
    <body>
      <div class="container">
        <h1>{{ error.statusCode }} Ouch!</h1>
        <p>{{ error.message }}</p>
        <button @click="handleClearError">return to homepage</button>
      </div>
    </body>
  
  </template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({redirect: "/"})
</script>

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
button {
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
}
</style>