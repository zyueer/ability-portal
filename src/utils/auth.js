import Cookies from 'js-cookie'
const TokenKey = 'x-access-token'
const RefreshTokenKey = 'x-refresh-token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token){
    let expires = new Date(new Date().getTime() + 4 * 60 * 60 * 1000)
    return Cookies.set(TokenKey, token, {
        expires: expires
    })
}

export function getRefreshToken() {
    return Cookies.get(RefreshTokenKey)
}

export function setRefreshToken(token){
    let expires = new Date(new Date().getTime() + 7 * 60 * 60 * 1000)
    return Cookies.set(RefreshTokenKey, token, {
        expires: expires
    })
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function removeRefreshToken() {
    return Cookies.remove(RefreshTokenKey)
}

export function clearToken() {
    removeToken()
}