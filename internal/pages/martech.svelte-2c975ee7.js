import{S as s,i as m,s as u,w as c,x as g,y as v,G as p,q as f,o as q,B as b}from"../chunks/vendor-132ca1f5.js";import{R as e,Q as t,M as a,a as A}from"../chunks/radar-config-0350f0c4.js";const N=[{name:"ADOPT",color:"#EB4646",textColor:"#DBD1C7",index:e.Adopt},{name:"TRIAL",color:"#CAE0DC",textColor:"#001932",index:e.Trial},{name:"ASSESS",color:"#DBD1C7",textColor:"#001932",index:e.Assess},{name:"HOLD",color:"#001932",textColor:"#DBD1C7",index:e.Hold}],h=[{name:"CMS & Data",index:t.BottomRight},{name:"User analytics",index:t.BottomLeft},{name:"Distribution",index:t.TopLeft},{name:"Commerce",index:t.TopRight}],C=[{quadrant:t.BottomRight,ring:e.Adopt,label:"Sanity.io",active:!0,moved:a.None},{quadrant:t.BottomRight,ring:e.Adopt,label:"Contentful",active:!0,moved:a.None},{quadrant:t.BottomRight,ring:e.Adopt,label:"Optimizely CMS",active:!0,moved:a.None},{quadrant:t.BottomRight,ring:e.Hold,label:"Umbraco CMS",active:!0,moved:a.Out},{quadrant:t.BottomRight,ring:e.Assess,label:"Strapi CMS",active:!0,moved:a.None},{quadrant:t.BottomRight,ring:e.Hold,label:"Builder.io",active:!0,moved:a.None},{quadrant:t.BottomLeft,ring:e.Trial,label:"Sitecore CDP",active:!0,moved:a.None},{quadrant:t.BottomLeft,ring:e.Assess,label:"Tealium CDP",active:!0,moved:a.None},{quadrant:t.BottomLeft,ring:e.Adopt,label:"Google Analytics",active:!0,moved:a.None},{quadrant:t.TopLeft,ring:e.Adopt,label:"Next.js",active:!0,moved:a.None},{quadrant:t.TopLeft,ring:e.Adopt,label:"PWA",active:!0,moved:a.None},{quadrant:t.TopLeft,ring:e.Trial,label:"React Native",active:!0,moved:a.None},{quadrant:t.TopLeft,ring:e.Hold,label:"Flutter",active:!0,moved:a.None},{quadrant:t.TopLeft,ring:e.Hold,label:"Shopify Hydrogen",active:!0,moved:a.None},{quadrant:t.TopLeft,ring:e.Adopt,label:"Vercel",active:!0,moved:a.None},{quadrant:t.TopLeft,ring:e.Adopt,label:"Serverless",active:!0,moved:a.None},{quadrant:t.TopRight,ring:e.Assess,label:"Shopify",active:!0,moved:a.None},{quadrant:t.TopRight,ring:e.Hold,label:"Medusa.js",active:!0,moved:a.None},{quadrant:t.TopRight,ring:e.Assess,label:"Omnium",active:!0,moved:a.None}],i={rings:N,quadrants:h,items:C};function T(d){let o,r;return o=new A({props:{data:i.items,quadrants:i.quadrants,rings:i.rings}}),{c(){c(o.$$.fragment)},l(n){g(o.$$.fragment,n)},m(n,l){v(o,n,l),r=!0},p,i(n){r||(f(o.$$.fragment,n),r=!0)},o(n){q(o.$$.fragment,n),r=!1},d(n){b(o,n)}}}class R extends s{constructor(o){super();m(this,o,null,T,u,{})}}export{R as default};