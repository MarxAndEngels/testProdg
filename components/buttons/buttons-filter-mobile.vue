<template>
	<div @click="setModalFilter(true)"
	     class="button button--filter big-font-size">
         Открыть фильтр
         <svg-icon class="filter-icon"  name="filter"/>
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