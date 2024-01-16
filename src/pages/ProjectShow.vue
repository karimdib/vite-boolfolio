<template>
    <div>
        <div>
            <h2>ciao sono una prova mi chiamo show</h2>
            <p>name: {{ project.name }}</p>
            <p> description: {{ project.description }}</p>
            <p class="type"> type: {{ project.type?.name }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            URL: "http://127.0.0.1:8000/api/projects/",
            project: [],
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

<style lang="scss" scoped>
.type {
    background-color: green;
}
</style>