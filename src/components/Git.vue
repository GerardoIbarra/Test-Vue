<template>
    <div class="container text-center mt-5">
        <h2 class="text-center mt-5">
            Git Profile
        </h2>
        <div class="container-fluid">
            <div class="input-group">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" v-model="username" placeholder="UserName" class="form-control" />
                <button @click="searchUser" class="btn btn-success rounded-0">Search</button>
            </div>
        </div>
        <div class="d-flex justify-content-center" style="margin-top: 20px;">
            <div class="card border-info bg-light" v-if="user" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 d-flex justify-content-center">
                        <img :src="user.avatar_url" :alt="user.name" class="img-fluid img-thumbnail" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ user.name ? user.name : 'No name available' }}</h5>
                            <div class="d-flex flex-row">
                                <p class="card-text flex-grow-1">
                                    <small class="text-muted">
                                        followers: {{ user.followers ? user.followers : 'No information available' }}
                                    </small>
                                </p>
                                <p class="card-text flex-grow-1">
                                    <small class=" text-muted">
                                        following: {{ user.following ? user.following : 'No information available' }}
                                    </small>
                                </p>
                            </div>
                            <p class="card-text">
                                <small>
                                    Bio: {{ user.bio ? user.bio : 'No information available' }}
                                </small>
                            </p>

                            <p class="card-text ">
                                <small class=" text-muted">
                                    Public Repository: {{ user.public_repos ? user.public_repos : 'No information available'
                                    }}
                                </small>
                            </p>
                            <a :href="user.blog ? user.blog : this.errorMessage = 'The user dont have blog'"
                                class="btn btn-primary " v-bind:disabled="!user.blog">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-top: 20px;">
            <div class="alert alert-danger" role="alert" v-if="errorMessage">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            user: null,
            errorMessage: ''
        };
    },
    methods: {
        searchUser() {
            if (this.username) {
                this.errorMessage = '';

                // Realizar una solicitud a la API de GitHub para obtener los datos del usuario
                axios.get(`https://api.github.com/users/${this.username}`)
                    .then(response => {
                        const data = response.data;
                        if (data.message && data.message === 'Not Found') {
                            this.user = null;
                            this.errorMessage = 'Usuario no encontrado';
                        } else {
                            this.user = data;
                        }
                    })
                    .catch(error => {
                        this.user = null;
                        this.errorMessage = 'Error al buscar el usuario';
                    });
            }
        }
    }
};
</script>

<style>
input,
button {
    margin-bottom: 20px;
}

.mt-0 {
    margin-top: 20 !important;
}
</style>
