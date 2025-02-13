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

export function updateArticleAPI(data) {
    return request({
        url: `/mp/articles/${data.id}?draft=false`,
        method: 'PUT',
        data
    })
}

export function getArticlesAPI(formData) {
    return request({
        url: '/mp/articles',
        method: 'GET',
        data: formData
    })
}
export function delArticlesAPI(id) {
    return request({
        url: `/mp/articles/${id}`,
        method: 'DELETE',
    })
}

export function getDetailAPI(id) {
    return request({
        url: `/mp/articles/${id}`,
        method: 'GET',
    })
}