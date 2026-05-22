// 这里放置你想共享的工具函数
export * from './utils';

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
};

export const setUserInfo = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};
