import {
    request
} from "@/utils";

export function getChannelsAPI() {
    return request({
        url: '/channels',
        method: 'GET',
    })
}