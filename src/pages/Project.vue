<script>
import axios from 'axios';
import { store } from '/store.js';
export default {
    data() {
        return {
            projects: store.projects,
        }
    }
    ,
    methods: {
        callApi() {
            axios
                .get("http://127.0.0.1:8000/api/projects")
                .then((reply) => {
                    this.projects = reply.data.projects
                    console.log(this.projects)
                })
        },
    },
    created() {
        this.callApi()
    }
}
</script>

<template>
    <div>
        <div class="container">
            <h2>ciao sono la pagina projects</h2>
            <div class="row">
                <div class="col-3" v-for="project in projects">
                    <p>{{ project.name }}</p>
                    <p>{{ project.description }}</p>
                    <p class="type">{{ project.type.name }}</p>
                    <router-link :to="{ name: 'show', params: { slug: project.slug } }">Vedi il progetto</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.type {
    background-color: green;
}
</style>
