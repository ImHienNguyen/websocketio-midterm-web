const joinedUsers = [];

function userJoin(id, email, room) {
    const user = { id, email, room };
    joinedUsers.push(user);
    return user;
}

function getCurrentUser(id) {
    return joinedUsers.find(user => user.id === id);
}

module.exports = {
    userJoin,
    getCurrentUser,
};
