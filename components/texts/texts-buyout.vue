<template>
	<div class="text_wrapper">
		<p class="text__about">
			Автоцентр {{ settings.dealer_name }} выкупит Ваш автомобиль в день обращения. Мы выдаём деньги за авто на руки в день оформления. Для удобства наших клиентов работает выездная служба по диагностике и оценке автомобилей, Вам нет необходимости трать свое время, мы можем осмотреть авто по адресу в пределах Москвы и Московской области и озвучить цену выкупа в тот же день.
		</p>
		<p class="text__about">
Помимо этого, Вы можете самостоятельно посетить наш автосалон и предоставить свою машину на диагностику, в таком случае потребуется всего лишь несколько часов для оформления сделки.
		</p>
		<p class="text__about">
			Просто оставьте заявку на сайте и наши специалисты свяжутся с Вами в течение 30 минут и проведут подробную консультацию по всем интересующим вопросам. Вам останется дождаться оценщика, или предоставить автомобиль.
		</p>
		<p class="text__about">
			Продавая автомобиль в автосалон Genzes вы можете быть уверены в полной прозрачности сделки. Для оказания услуги требуется минимальный пакет документов, отправьте заявку прямо сейчас и вы максимально выгодно продадите свой авто!
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