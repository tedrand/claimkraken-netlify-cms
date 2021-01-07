import React from 'react'

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  // TwitterShareButton,
  // TwitterIcon,
  // WhatsappShareButton,
  // WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const ShareButtons = ({ title, url }) => {

  return (
    <div>
      <FacebookShareButton url={url} >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <LinkedinShareButton url={url} >
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title} >
        <RedditIcon size={40} round={true} />
      </RedditShareButton>

      <EmailShareButton url={url} >
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
    </div>
  )

}
export default ShareButtons