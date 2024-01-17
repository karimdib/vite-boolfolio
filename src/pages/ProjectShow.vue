<template>
    <div>
        <div>
            <h2>ciao sono una prova mi chiamo show</h2>
            <p class="">name: {{ project.name }}</p>
            <p> description: {{ project.description }}</p>
            <p> slug: {{ project.slug }}</p>
            <div class="d-flex" v-for="(tecnology, i) in project.tecnologies">
                <p class="badge text-info">tecnology: {{ tecnology?.name }}</p>
            </div>
            <p class="badge text-success"> type: {{ project.type?.name }}</p>
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
                .get(`${this.URL}${this.$route.params.slug}`)
                .then((reply) => {
                    console.log(reply)
                    this.project = reply.data.project
                    console.log(this.project)
                    console.log(this.project.tecnologies.name)
                })
        }
    },
    created() {
        this.projectShow(),
            this.tecnology
    }

}
</script>

<style lang="scss" scoped></style>