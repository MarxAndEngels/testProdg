<template>
    <div>
        <div class="buttons__price">
            <h3 class="h1__title">Подобрать автомобиль</h3>
            <buttons-filter-mobile/>
          </div>
    </div>
</template>
<script>
import {mapMutations} from "vuex";
export default {
        methods: {
            ...mapMutations({
            setModalFilter: 'modal/SET_MODAL_FILTER',
        }),
	},
}
</script>
<style>
    
</style>