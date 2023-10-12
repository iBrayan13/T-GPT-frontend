<template>
    <nav id="navbar">
        <ul>
            <router-link to="">Chat</router-link>
            <router-link to="">Preguntas Frencuentes</router-link>
            <router-link to="">T & C</router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped lang="sass">
#navbar
    @include reset-pm()
    @include set-size($width: 100%, $height: 4rem)
    background: linear-gradient(to right, $background-primary-color -75%, $background-secondary-color 50%, $background-primary-color 175%)
    display: flex
    justify-content: center
    align-items: center

    ul
        @include reset-pm()
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        gap: 1rem

        a
            transition: all ease 0.25s
            font-weight: 500
            padding: 0.5rem

            &:-webkit-any-link
                color: black
                text-decoration: none

            &:hover
                cursor: pointer
</style>