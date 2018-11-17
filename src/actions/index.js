export const modify = (num) => (
    {
        type: 'MODIFY',
        num
    }
);

export const reset = () => (
    {
        type: 'RESET'
    }
);

export const increase = () => (
    {
        type: 'INCREASE',
    }
);