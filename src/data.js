const Quadrant = {
    BottomRight: 0,
    BottomLeft: 1,
    TopLeft: 2,
    TopRight: 3
}

const Moved = {
    None: 0,
    In: 1,
    Out: -1
}

const Ring = {
    Adopt: 0,
    Trial: 1,
    Assess: 2,
    Hold: 3
}

export const data = [
    {
        "quadrant": Quadrant.BottomRight,
        "ring": Ring.Adopt,
        "label": "React.js",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.BottomRight,
        "ring": Ring.Adopt,
        "label": "Next.js",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.BottomRight,
        "ring": Ring.Adopt,
        "label": "TypeScript",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.BottomRight,
        "ring": Ring.Hold,
        "label": "JavaScript",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.BottomRight,
        "ring": Ring.Trial,
        "label": "Node.js",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Adopt,
        "label": "Sanity.io",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Adopt,
        "label": "Contentful",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Assess,
        "label": "Shopify",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Adopt,
        "label": "Optimizely",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.BottomRight,
        "ring": Ring.Adopt,
        "label": "Gatsby",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Adopt,
        "label": "Vercel",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Adopt,
        "label": "AWS",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Adopt,
        "label": "Azure",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Assess,
        "label": "Strapi",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Assess,
        "label": "Omnium",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Assess,
        "label": "Optimizely Zaius",
        "active": true,
        "moved": Moved.None
    },
    {
        "quadrant": Quadrant.TopLeft,
        "ring": Ring.Adopt,
        "label": "C#",
        "active": true,
        "moved": Moved.None
    },
]