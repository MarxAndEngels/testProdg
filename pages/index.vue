<template>
	<div class="main__page">
		<h1 class="h1__title h1__title--hidden">{{ pageTitle }}</h1>
		<sliders-main/>
			 <lists-marks-favorites ref="marks"/>
		 <lists-marks/>

		<h2 class="h2__title" v-show='false'>Последние поступления</h2>
		<catalog
				is-index
				:has-filters="false"
				:has-lists="false"
				:has-pagination="false"
				:sort="'created_at|desc'"
				:limit="8" />
		<nuxt-link class="button button--more"
		           :to="`/${catalogRoute}`">
			Все автомобили
		</nuxt-link>
				<collections />
				<!-- <progress-main/> -->
				<!-- <collections-favorites/> -->
	</div>
</template>
<script>
import {mapGetters} from "vuex";
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags],
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute'
		})
	},
	data() {
		return {
			readyStateComplete: false
		}
	},
	mounted() {
		document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      console.log('Page completed with image and files!')

      this.readyStateComplete = true

    }
  }
	},
}
</script>