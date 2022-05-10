const joinedUsers = [];

function userJoin(id, email, room) {
    const user = { id, email, room };
    joinedUsers.push(user);
    return user;
}

function getCurrentUser(id) {
    return joinedUsers.find(user => user.id === id);
}

function userLeave(id) {
    const index = joinedUsers.findIndex(user => user.id === id);

    if (index !== -1) {
        return joinedUsers.splice(index, 1)[0];
    }
}

function getRoomUsers(room) {
    return joinedUsers.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};
