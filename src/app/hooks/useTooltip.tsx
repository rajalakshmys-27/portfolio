import { useState } from 'react';

export const useTooltip = (timeout = 3000) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const showTooltip = () => {
        setTooltipVisible(true);
        setTimeout(() => setTooltipVisible(false), timeout);
    };

    return { tooltipVisible, showTooltip };
};