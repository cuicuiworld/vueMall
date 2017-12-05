// 获取cache
export const getSessionStorage = name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}

// 设置cache
export const setSessionStorage = (name, content) => {
    if (!name) return;
    if (typeof content != 'string') {
        content = JSON.stringify(content);
    }
    return window.sessionStorage.setItem(name, content);
}

// 移除cache
export const removeSessionStorage = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
}

// 获取前端缓存
export const getLocalStorage = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

// 设置前端缓存
export const setLocalStorage = (name, content) => {
    if (!name) return;
    if (typeof content != 'string') {
        content = JSON.stringify(content);
    }
    return window.localStorage.setItem(name, content);
}

// 移除前端缓存
export const removeLocalStorage = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}