import {
    request
} from "@/utils";

export function createArticleAPI(formData) {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data: formData
    })
}