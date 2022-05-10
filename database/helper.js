const getCurrent = () => {
    const now = new Date()
    return now.getHours() + ":" + now.getMinutes()
}

const formatMessage = (user, message) => ({
    id: user.id, email: user.email, msg:message, now: getCurrent()
})

module.exports = {
    formatMessage
}