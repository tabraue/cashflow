<template>
    <div class="splashscreen">
        <img src="src\assets\logo.svg" alt="Logo Cash Flow"/>
        <h1>
            
            <span>Cash</span>Flow
        </h1>
    </div>
</template>

<script>
export default {
    


}
</script>

<style scoped>
.splashscreen {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}

h1{
    color: var(--darkblue);
}

h1 span {
    color: var(--green);
}

</style>