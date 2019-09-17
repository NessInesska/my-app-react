import React from 'react';

class NewsPageComponent extends React.Component {

    render() {
        // console.log(this.props);
        // getNewsHeadings(this.props.db.default);
        console.log(this.props.db.default);
        return (
            <div>Hi, I am a Car!
                {
                    this.props.db.default.map(
                        (el) =>
                            <div>
                                {el.heading}
                            </div>
                    )
                }
            </div>
        );
    }
}

export default NewsPageComponent;