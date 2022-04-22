<template>
    <div class="news">
        This is news
        <div>
            <router-link to="/news/newsYesterday">newsYesterday</router-link> |
            <router-link to="/news/today">newsToday</router-link> |
            <router-link to="/news/newstom">newstom</router-link> |
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'news'
}
</script>

<style scoped>
.news {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}
</style>