import React from 'react'

const TwitterTimeline = () => {
    return (
        <div className="mb-3">
            <a
                href="https://twitter.com/ClaimKraken?ref_src=twsrc%5Etfw"
                className="twitter-follow-button"
                data-size="large"
                data-width="100%"
                data-show-count="true">
                Follow @ClaimKraken
            </a>
            <a
                className="twitter-timeline"
                href="https://twitter.com/ClaimKraken?ref_src=twsrc%5Etfw"
                data-theme="dark"
                data-width="100%"
                data-height="500">
                Tweets by ClaimKraken
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    )
}

export default TwitterTimeline