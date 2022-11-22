<template>
	<div class="tech"
	     :class="techClass">
		<div v-for="tech in techs"
		     :key="tech.slug"
		     class="tech__item" :class="{'tech__item--small':( small || short) && !tech.small , 'main': $route.params.id}">
			<div class="wrapper__tech__items">
            <div v-if="$route.params.id" class="tech__item-icon_wrapper">
				<svg-icon class="tech__item-icon" :name='tech.icon'/>
			</div>
			
			<div>
				<div class="tech__item-name">
				{{ tech.name }}:
			</div>
			<div class="tech__item-info">
				{{ offer[tech.slug].title || offer[tech.slug] | numberFormat }} {{ tech.postfix }}
			</div>
			</div>
				
			</div>
			
		</div>
	</div>
</template>

<script>
import filters from "@/mixins/filters";

export default {
	props: {
		offer: Object,
		short: Boolean,
		long: Boolean,
		offerPage: Boolean,
		small: Boolean,
	},
	data() {
		return {
			techs: [
				{
					name: 'Пробег',
					slug: 'run',
					postfix: 'км',
					small: true,
					icon: 'car'
				},
				{
					name: 'Мощность',
					slug: 'engine_power',
					postfix: 'л.с.',
					small: true,
					icon: 'mileage'
				},
				{
					name: 'Тип кузова',
					slug: `bodyType`,
					postfix: '',
					small: false,
					icon: 'minivan-car'
				},
				{
					name: 'Коробка',
					slug: `gearbox`,
					postfix: '',
					small: true,
					icon: 'kpp'
				},

				{
					name: 'Кол-во владельцев',
					slug: `owner`,
					postfix: '',
					small: true,
					icon: 'owners'
				},
				{
					name: 'Объем двигателя',
					slug: 'engine_volume',
					postfix: 'л.',
					small: false,
					icon: 'volume'
				},
				{
					name: 'Тип двигателя',
					slug: `engineType`,
					postfix: '',
					small: true,
					icon: 'fuel'
				},
				{
					name: 'Привод',
					slug: `driveType`,
					postfix: '',
					small: true,
					icon: 'wd'
				},
				{
					name: 'Цвет',
					slug: `color`,
					postfix: '',
					small: false,
					icon: 'color'
				},
			]
		}
	},
	mixins: [filters],
	computed: {
		techClass() {
			return this.short ? 'tech--short' : this.offerPage ? 'tech--offer-page' : this.small ? 'tech--offer-small' : 'tech--long'
		}
	}
}
</script>