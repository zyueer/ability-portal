import {request} from 'src/request';

const urls = {
    loginByUserName: '/login',

}

export {urls};
// export const loginByUserName = (params) => {
//     request.post(
//         urls.loginByUserName,
//         {params},
//         {}    //todo  showError: false
//     )
// }
export function loginByUserName (params) {
    return request({
        url: urls.loginByUserName,
        method: 'post',
        data: params
    })//todo  showError: false
}