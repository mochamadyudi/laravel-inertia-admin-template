export const ACT_EVENT = (type: string): string => {
    return `EVT/${type}`;
};
export const ACT_REQUEST = (type: string): string => {
    return `REQ/${type}`;
};

export const ACT_SUCCESS = (type: string): string => {
    return `REQ/${type}/SUCCESS`;
};
export const ACT_FAILURE = (type: string): string => {
    return `REQ/${type}/FAILURE`;
};
