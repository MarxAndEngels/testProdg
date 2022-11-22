<template>
    <div>
        <span class="sitemap__sub_item">
            Автомобили с пробегом
        </span>
        <ul v-if="marks" class="text__about">
         <li v-for="el of marks" class="sitemap__mark_item">
            <nuxt-link :to="`/${catalogRoute}/${el.slug}`">
                {{ el.title }} 
            </nuxt-link>
         </li>
    </ul>
    <div>
            <footer-items/>
        </div>
    </div>
    
</template>
<script>
import {mapGetters,mapActions} from "vuex";
import requests from '~/mixins/requests'
export default {
    mixins: [requests],
    data() {
        return {
            fullArray: null
        }
    },
  	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute',
			settings: 'settings/settings',
			marks: 'marks/marks',
            folders: 'folders/folders'
		}),
    },
    // async fetch() {
	// 	try {
    //         this.fullArray = await this.getMarksAndFolders()
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// },
    methods: {
        ...mapActions({
			request: 'request/request',
		}),
        async getMarksAndFolders(){
        // let folders;
        // let array = {};
        // for(let el of this.marks){
        //     folders = await this.getFolders(el.slug, false);
        //     array[el.slug] = folders;
        // }
        // return array;
        },
    },
}
</script>
<style>
    
</style>