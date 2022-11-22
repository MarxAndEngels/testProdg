export default {
    validate(ctx) {
        console.log(ctx.store.getters['settings/catalogRoute'])
        return ctx.params.category === ctx.store.getters['settings/catalogRoute'];
    }
}