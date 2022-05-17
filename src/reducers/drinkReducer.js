export default (state = {}, { type, payload }) => {
    switch (type) {

        case 'SELECT_DRINK':
            return payload

        default:
            return state
    }
}
