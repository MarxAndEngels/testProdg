<template>
	<div class="collections">
		<collections-favorites-item v-for="item in collections"
		                  :key="item.title"
		                  :item="item" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			collections: [
				{
					title: 'Ford Focus',
					slug: '5-seriya'
				},
				{
					title: 'Hyundai ix35',
					slug: 'c-klass'
				},
				{
					title: 'Хэтчбеки',
					slug: 'land-cruiser-prado'
				},
				{
					title: 'Лифтбеки',
					slug: 'outlander'
				},
				{
					title: 'Универсалы',
					slug: 'passat-cc'
				},
				{
					title: 'Лифтбеки',
					slug: 'rio'
				},
				{
					title: 'Универсалы',
					slug: 'solaris'
				},
			],
		}
	}
}
</script>