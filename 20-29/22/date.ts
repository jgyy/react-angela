export const getDate = () => {
    const today = new Date();
    const options: { [key: string]: string } = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
};