export enum app_images {
    ARROW_BACK = 'ARROW_BACK',
    CALL = "CALL",
    MORE_VERT = "MORE_VERT",
    PROFILE = "PROFILE",
    VIDEOCAM = "VIDEOCAM",
    ATTECHMENT = "ATTECHMENT",
    SEND = "SEND",
    MICK = "MICK",
    PHOTO_CAMERA = "PHOTO_CAMERA",
    MOOD = "MOOD"
}
function getImage(name: string): number {
    let iconName: any
    switch (name) {
        case app_images.ARROW_BACK:
            iconName = require('../../assets/images/arrow_back/arrow_back.png')
            break;
        case app_images.CALL:
            iconName = require('../../assets/images/call/call.png')
            break;
        case app_images.MORE_VERT:
            iconName = require('../../assets/images/more_vert/more_vert.png')
            break;
        case app_images.PROFILE:
            iconName = require('../../assets/images/profile/profile.png')
            break;
        case app_images.VIDEOCAM:
            iconName = require('../../assets/images/videocam/videocam.png')
            break;
        case app_images.ATTECHMENT:
            iconName = require('../../assets/images/attachment/attachment.png')
            break;
        case app_images.SEND:
            iconName = require('../../assets/images/Send/Send.png')
            break;
        case app_images.MOOD:
            iconName = require('../../assets/images/mood/mood.png')
            break;
        case app_images.MICK:
            iconName = require('../../assets/images/mick/mick.png')
            break;
        case app_images.PHOTO_CAMERA:
            iconName = require('../../assets/images/photo_camera/photo_camera.png')
            break;
        default:
            iconName = null
    }
    return iconName
}
export function getImageFromURL(url: string): number {
    if (url) {
        const name: string = url.substring(url.lastIndexOf('/') + 1);
        return getImage(name);
    }
    return -1;
}
