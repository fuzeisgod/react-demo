import React, { Component } from 'react'

const withCopyright = (YourComponent) => {
    return class withCopyright extends Component {
        render() {
            return (
                <>
                    <YourComponent {...this.props} />
                    <div>&copy; 2019 &emsp; 千峰教育</div>
                </>
            )
        }
    }
}

export default withCopyright