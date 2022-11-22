<template>
	<div class="advantages" :class="{'advantages--modal':modal}">
		<div class="advantages__item"
		     v-for="item in advantages">
			<div class="advantages__item-name">{{ item.name }}</div>
			<div class="advantages__item-info">
				{{ item.desc }}
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			advantages: [
				{
					name: '',
					desc: 'Мгновенная выплата'
				},
				{
					name: '',
                    desc: 'Среднерыночная цена'
				},
				{
					name: 'Первый взнос',
                    desc: ''
				},
				{
					name: 'Гарантия на авто',
                    desc: ''
				},
			]
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings'
		})
	},
	props: {
		modal: Boolean
	}
}
</script>