import React, { useState } from 'react';

function ErrorBoundary() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hasError: false
    //     }
    // }

    const [hasError, setHasError] = useState(false)

    render() {
        if (this.state.hasError) {
            return <h1>Yikes. That's an error.</h1>
        }
        return this.props.children
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

}

export default ErrorBoundary;
