<template>
    <Head>
      <title>{{ userdata.about.displayname }} - Freelink</title>
      <meta name="description" :content="userdata.about.aboutme" />
    </Head>

    <body>
  <div class="container">
    <div class="card">
    <div class="profile-img-container">
        <img :src="userdata.about.profilepicture" alt="Profile Image" class="profile-img">
      </div>
      <h1 class="name">{{ userdata.about.displayname }}</h1>
      <h3>{{ userdata.about.aboutme }}</h3>

      <div v-for="(section, index) in userdata.sections" :key="index">
      <p class="bio">{{ section.title }}</p>
      <div class="links">
        <a v-for="linkItem in section.links" 
          :key="linkItem.title"
          :href="linkItem.link"
          class="btn btn-primary" > {{ linkItem.title }} </a>
      </div>
    </div>

    </div>
  </div>
</body>
</template>

<script setup>

const { id } = useRoute().params;

const development = process.env.NODE_ENV !== 'production';
const baseURL = development ? 'http://localhost:3000' : 'https://my.prod';

const uri = `${baseURL}/api/user/${id}.json`;
const { data: userdata } = await useFetch(uri, { method: 'GET' });

// Make sure userdata contains the expected properties
//console.log('Fetched User Data:', userdata);

//not working :c const profile = userdata.about || {};
//const sections = userdata.sections || [];

//console.log('Fetched profile Data:', userdata.about);
</script>

<style scoped>
@import url("~/assets/css/gallery.css");
@import url("~/assets/css/profile.css");
</style>