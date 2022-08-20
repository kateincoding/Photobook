<template>
    <div>

    </div>
</template>

<script>
    export default {
        methods: {
            async logout(){
                await this.$store.dispatch("auth/logout");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>