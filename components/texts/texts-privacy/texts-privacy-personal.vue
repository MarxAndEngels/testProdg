<template>
	<div>
		<h2 class="h2__title h2__title--no-margin-top">Согласие на обработку персональных данных</h2>
		<p class="text__p">
			Пользователь, оставляя обращение на Сайте {{domain}}, принимает настоящее Согласие на обработку персональных
			данных (далее – Согласие).
		</p>
		<p class="text__p">
			Действуя свободно, своей волей и в своем интересе, а также подтверждая свою дееспособность, Пользователь дает свое
			согласие {{domain}} на обработку своих персональных данных со следующими условиями:
		</p>
		<p class="text__p">
			Данное Согласие дается на автоматизированную обработку персональных данных.
		</p>
		<p class="text__p">
			Согласие дается на обработку следующих моих персональных данных:
			
			Специальные категории персональных данных – не обрабатываются.
			Биометрические персональные данные – не обрабатываются.
		</p>
		<p class="text__p">
			Персональные данные, не являющиеся специальными или биометрическими: фамилия, имя, отчество;
			номер телефона; адрес электронной почты; пол; семейное положение; дата рождения; адрес места
			жительства, образ жизни и поведение субъекта (в том числе, в сети Интернет), сфера деятельности,
			место работы и должность (род занятий), иные данные и информация, предоставленные и
			предоставляемые субъектом или ставшие известными {{domain}} в целях, указанных в настоящем
			согласии.
		</p>
		<p class="text__p">
			Настоящее Согласие дается на выполнение следующих действий (операций), совершаемых с использованием средств
			автоматизации или без использования таких средств с персональными данными: сбор, запись, систематизация,
			накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача, в том числе
			трансграничная (распространение в случаях и в объеме, предусмотренных законодательством РФ, в том числе
			предоставление в государственные органы и иные организации), деперсонализация, блокирование, удаление, уничтожение
			персональных данных в целях:
		</p>
		<p class="text__p">
			продвижения и совершенствование товаров и услуг {{domain}};
			получения и исследования статистических данных об объемах продаж и качестве услуг {{domain}};
			изучения конъюнктуры рынка автомобилей, автомобильных запасных частей и аксессуаров;
			сбора статистики по посетителям Сайта для улучшения качества работы Сайта и его содержания;
			осуществления других видов деятельности в рамках законодательства РФ с обязательным выполнением требований
			законодательства РФ в области персональных данных.
			сбора данных по поведению на сайте {{domain}} (сервисами веб-аналитики, метрическими программами). Подробная
			информация приведена на странице «Файлы Cookie и анализ посещения сайта»
		</p>
		<p class="text__p">
			При обработке персональных данных и информации в целях, не связанных с направлением информации рекламного
			характера, могут использоваться e-mail рассылка (направление сообщений на электронную почту), СМС-рассылка (служба
			коротких сообщений), почтовая рассылка, телефонные звонки, любые иные средства связи, сеть Интернет. Для целей
			направления информации рекламного характера могут использоваться только варианты связи, отмеченные выше, либо на
			которые отдельно дано согласие.
		</p>
		<p class="text__p">
			Основанием для обработки персональных данных является: ст. 24 Конституции Российской Федерации; настоящее Согласие
			на обработку персональных данных.
		</p>
		<p class="text__p">
			Оператор персональных данных ведет деятельность на территории Российской Федерации в соответствии с
			законодательством Российской Федерации. Предлагаемые товары/работы/услуги доступны к получению на территории
			Российской Федерации. Мониторинг потребительского поведения субъектов, находящихся за пределами Российской
			Федерации, не ведется.
		</p>
		<p class="text__p">
			Обработка персональных данных может быть прекращена по запросу субъекта персональных данных. Хранение персональных
			данных, зафиксированных на бумажных носителях, осуществляется согласно Федеральному закону №125-ФЗ «Об архивном
			деле в Российской Федерации» и иным нормативно правовым актам в области архивного дела и архивного хранения.
		</p>
		<p class="text__p">
			Согласие может быть отозвано субъектом персональных данных или его представителем путем направления письменного
			заявления по форме обратной связи на сайте.
		</p>
		<p class="text__p">
			В случае отзыва субъектом персональных данных или его представителем согласия на обработку персональных данных
			Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии
			оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона
			№152-ФЗ «О персональных данных» от 27.07.2006 г.
		</p>
		<p class="text__p">
			Настоящее согласие действует с момента проставления отметки и до момента прекращения обработки персональных
			данных, указанных в п.7 и п.8 данного Согласия.
		</p>
		<p class="text__p">
			Политика обработки данных {{domain}}, а также описание прав субъекта персональных данных и возможности их
			реализации приведены в разделе «Правовая информация».
		</p>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			domain: 'settings/domain'
		})
	},
}
</script>