<template>
	<div class="contacts">
		<map-yandex-map class="contacts__map" />
		<div class="contacts__info">
			<div class="contacts__info-line" v-for="item in info" :key="item.name">
				<div class="contacts__info-name">
					{{item.name}} :
				</div>
				<div v-if="item.slug == 'phone'" class="contacts__info-info">
					<a :href="'tel:' + settings[item.slug]">
						{{settings[item.slug]}}
					</a>
				</div>
				<div v-else class="contacts__info-info">
						{{settings[item.slug]}}
				</div>
			</div>
			<buttons-callback-phone @click/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	components: {},
	
	data() {
		return {
			info: [
				{
					name: 'Город',
					slug: 'city'
				},
				{
					name: 'Адрес',
					slug: 'address'
				},
				{
					name: 'Номер телефона',
					slug: 'phone'
				},
				{
					name: 'График работы в буднии дни',
					slug: 'work_shedule_weekday'
				},
				{
					name: 'График работы в выходные дни ',
					slug: 'work_shedule_weekends'
				},
				{
					name: 'E-mail',
					slug: 'email'
				},
			]
		}
	},
	computed: {
		...mapGetters({
			settings: "settings/settings"
		})
	}
}
</script>
