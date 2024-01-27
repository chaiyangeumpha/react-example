import React from 'react';
function Welcome(props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
    return <h1>Hello, {props.name}</h1>;
}

export default Welcome;