export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};

export const calculateYearsOfExperience = (startDate: string): string => {
    if (typeof window === 'undefined') {
        return "3.5";
    }
    
    const start = new Date(startDate);
    const today = new Date();
    const years = today.getFullYear() - start.getFullYear();
    const months = today.getMonth() - start.getMonth();
    const totalYears = years + months / 12;
    return Math.max(0, totalYears).toFixed(1);
};