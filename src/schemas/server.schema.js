export const schema = () => {
    return {
        name: null,
        image: null,
        members: [],
        channels: [],
        type: null,
        created_at: new Date().toString(),
        updated_at: new Date().toString()
    }
}

export const edit = (currentServer, name = null, image = null, members = null, channels = null) => {
    return {
        name: name ?? currentServer.name,
        image: image ?? currentServer.image,
        members: members ?? currentServer.members,
        channels: channels ?? currentServer.channels,
        created_at: currentServer.created_at,
        updated_at: new Date().toString()
    }
}