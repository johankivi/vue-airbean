<template>
    <section class="profile-form">
        <header>
            <img src="@/assets/graphics/logo-sml.svg" alt="logo small">
            <h2>Välkommen till airbeanfamiljen!</h2>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
        </header>
            <label for="name">Namn</label>
            <input type="text" name="name" v-model="name">
            <label for="email">Epost</label>
            <input type="email" name="email" v-model="email.email" @keyup="validateEmail" :class="{ notvalid : !email.valid }">
            <label for="gdpr">
                <input type="checkbox" name="gdpr" v-model="gdpr"> GDPR Ok!
            </label>
         <a href="#" class="btn" @click="registerProfile">Brew me a cup!</a>
    </section>
</template>
<script>
export default {
    name: 'ProfileForm',
    data(){
        return {
            name: '',
            email: {
                email: '',
                valid: false 
            },
            gdpr: false
        }
    },
    methods: {
        registerProfile(){

        },
        validateEmail(){
             const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            (emailPattern.test(this.email.email)) ? this.email.valid = true : this.email.valid = false;
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/variables';

.profile-form {
    position: absolute;
    left: 5vw;
    top: 10vh;
    height: 87vh;
    width: 90vw;
    padding: 1rem;
    box-sizing: border-box;
    background: $pink;
    border-radius: .25rem;
    box-shadow: 0 0 6rem rgba($color: #000000, $alpha: 1);
    display: flex;
    flex-direction: column;

    > header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;

        h2 {
            text-align: center;
            line-height: 110%;
            color: $darkbrown;
        }

        > p {
            text-align: center;
        }
    }

    label {
        font-size: .8rem;
        padding: .25rem 0;
        margin-top: 1rem;
        display: flex;
        align-items: center;

        > [type="checkbox"] {
            margin: 0 .5rem 0 0;
        }

    }

    input {
        border: 1px solid rgba($color: #000000, $alpha: .8);
        padding: .75rem;
        font-size: 1rem;
        border-radius: .25rem;
        background: none;
        transition: all .2s ease;

        &.notvalid {
            border-color: $orange;
        }

        &:focus {
            outline: none;
        }
    }

    .btn {
        margin-top: auto;
    }
}
</style>