// Comet.js

import React, { useEffect, useState } from 'react';

const Comet = () => {
    const [cometPosition, setCometPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        // Randomize the comet's starting position
        const randomTop = Math.random() * 100; // Random percentage for vertical position
        const randomLeft = -10; // Start off the left side of the screen
        setCometPosition({ top: `${randomTop}%`, left: `${randomLeft}vw` });

        // Set a timeout to remove the comet after animation
        const timeout = setTimeout(() => {
            setCometPosition({ top: `${randomTop}%`, left: `${randomLeft}vw` }); // Reset position
        }, 3000); // Duration of the comet's animation (same as in CSS)

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className="comet"
            style={{ top: cometPosition.top, left: cometPosition.left }}
        />
    );
};

export default Comet;
