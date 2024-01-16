<template>
    <div>
        <p>ciao sono una prova mi chiamo show</p>
        <p>{{ project.name }}</p>
        <p>{{ project.description }}</p>
        <p class="type">{{ project.type.name }}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            URL: "http://127.0.0.1:8000/api/projects/",

        }
    },
    methods: {
        projectShow() {
            axios
                .get(`${this.URL}${this.$route.params.id}`)
                .then((reply) => {
                    console.log(reply)
                    this.project = reply.data.project
                    console.log(this.project)
                })
        }
    },
    created() {
        this.projectShow()
    }

}
</script>

<style lang="scss" scoped></style>