<template>
    <div>
        <router-link class="link-route" :to="{ name: 'contattaci' }">Contattaci</router-link>
        <router-link :to="{ name: 'portfolio' }">pagina iniziale</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.header {
    text-align: center;
}

.link-route {
    padding: 10px;
}
</style>