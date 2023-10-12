<template>
    <footer>
        <div class="footer-left">
            <p>Development - Brayan Barreto</p>
            <div class="social-media">
                <a href="https://github.com/iBrayan13/T-GPT-frontend" target="_blank"><img src="../../public/github_black.png" alt="Frontend"></a>
                <a href="https://github.com/iBrayan13/T-GPT-backend" target="_blank"><img src="../../public/github_black.png" alt="Backend"></a>
                <!--<a href="">Portfolio</a>-->
                <a href="https://www.linkedin.com/in/brayan-barreto" target="_blank"><img src="../../public/linkedin_black.png" alt="LinkedIn"></a>
            </div>
        </div>

        <!--<div class="footer-right">
            <p>Design - Marianny Paredes</p>
            <div class="social-media">
                <p>Portfolio</p>
                <p>LinkedIn</p>
            </div>
        </div>-->
    </footer>
</template>

<script>
export default {
    name: 'FooterCom'
}
</script>

<style scoped lang="sass">
footer
    @include set-size($width: 100%, $height: calc(14rem - 1rem))
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, $background-secondary-color 100%) no-repeat
    padding: 1rem
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    text-align: center
    gap: 15rem
    color: $font-link-color

    .footer-left
        margin-top: 5rem
    
    .footer-right
        margin-top: 5rem

    .social-media
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        gap: 1rem

        img
            @include set-size($width: 2rem, $height: 2rem)
            border: 0
            border-radius: 50%

</style>