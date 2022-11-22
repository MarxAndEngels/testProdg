import settings from '~/apollo/queries/settings'
import marks from '~/apollo/queries/marks'

export const actions = {
    async nuxtServerInit({dispatch, commit, state}, {app, req}) {
        let site_id = 71
        let site_id_mirror = 72
        let site_id_mirror2 = 73
        let current_site_id
        await commit('settings/SET_SITE_ID', site_id)

// genzes.ru
// дженсес.рф   https://xn--d1acac0byab.xn--p1ai/
// джензез.рф    https://xn--d1acacgb3b.xn--p1ai/

        if (req.headers.host === 'xn--d1acac0byab.xn--p1ai') {
            await commit('settings/SET_SITE_ID', site_id_mirror)
            await commit('settings/SET_DOMAIN', 'https://дженсес.рф')
            await commit('settings/SET_CATALOG_ROUTE', 'cars')
            await commit('settings/SET_IS_MIRROR', true)
            current_site_id = site_id_mirror
        }
        else if (req.headers.host === 'xn--d1acacgb3b.xn--p1ai') {
            await commit('settings/SET_SITE_ID', site_id_mirror2)
            await commit('settings/SET_DOMAIN', 'https://джензес.рф')
            await commit('settings/SET_CATALOG_ROUTE', 'cars')
            await commit('settings/SET_IS_MIRROR', true)
            
            current_site_id = site_id_mirror2
        }
        else{
            await commit('settings/SET_SITE_ID', site_id)
            await commit('settings/SET_DOMAIN', 'https://genzes.ru')
            await commit('settings/SET_CATALOG_ROUTE', 'cars')
            await commit('settings/SET_IS_MIRROR', false)
            current_site_id = site_id
        }
        let client = app.apolloProvider.defaultClient
        let marksResponse = await client.query(
            {
                query: marks,
                variables: {
                    site_id: current_site_id
                }
            })
        await commit('marks/SET_MARKS', marksResponse.data.marks)

        let currentSettings = {}
        let settingsResponse = await client.query(
            {
                query: settings,
                variables: {
                    site_id: current_site_id
                }
            })
        settingsResponse.data.settings.settings.map(value => {
            currentSettings[value.key] = value.value
        })
        commit('settings/SET_SETTINGS', currentSettings)


        // if (req.headers.host === 'xn--d1acac0byab.xn--p1ai') {
        //     await commit('settings/SET_YM', currentSettings.ym)
        // }
        // else if (req.headers.host === 'xn--d1acacgb3b.xn--p1ai') {
        //     await commit('settings/SET_YM', currentSettings.ym)
        // }
        // else{
        //     await commit('settings/SET_YM', currentSettings.ym)
        // }
    },

}