<template>
	<div class="text_wrapper">
		<p class="text__about">
			Автоцентр {{ settings.dealer_name }} предлагает только проверенные автомобили с пробегом. Предпродажная подготовка гарантирует отличное техническое состояние и абсолютную юридическую чистоту каждого авто, представленного в нашем каталоге. 
		</p>
		<p class="text__about">
			Выбирайте понравившийся автомобиль и заполняйте заявку на кредит, после чего специалист перезвонит Вам для уточнения деталей. Мы строим максимально доверительные и прозрачные отношения с клиентами, чтобы сделать Вашу покупку автомобиля радостной и беззаботной.
		</p>
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			settings: 'settings/settings'
		})
	}
}
</script>