export function deltaDays(endDate) {
    return Math.floor((endDate.getTime() - Date.now()) / 86400000)
}
