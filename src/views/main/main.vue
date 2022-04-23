<template>
    <div class="main">
        <div id="nav">
            <router-link to="/main/home">Home</router-link> |
            <router-link to="/main/about">About</router-link> |
            <router-link to="/main/news/today">News</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'main'
}
</script>

<style scoped>
#nav {
    padding: 30px;
    background: #2c3e50;
    color: #ffffff;
}

a {
    font-weight: bold;
    color: #ffffff;
}
</style>